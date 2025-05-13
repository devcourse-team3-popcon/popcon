import { useState, useEffect, useRef } from "react";
import loginGroup from "../../assets/images/login-group.svg";
import logo from "../../assets/images/logo-no-period.svg";
import logoPopcon from "../../assets/images/logo-login-popcon.svg";
import { signupUser } from "../../apis/login/login";
import { searchArtist } from "../../apis/spotify/spotifySearch";
import { getSpotifyAccessToken } from "../../apis/spotify/getSpotifyAccessToken";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const genres = [
  "Country",
  "Hip-hop",
  "POP",
  "Rock",
  "EDM",
  "Jazz",
  "R&B",
  "Indie",
  "alternative",
];
const allowedDomains = ["gmail.com", "naver.com"];

const useDebounce = (value: string, delay: number) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
};

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [favoriteArtist, setFavoriteArtist] = useState("");
  const [favoriteGenre, setFavoriteGenre] = useState(genres[0]);
  const [genreDropdownOpen, setGenreDropdownOpen] = useState(false);

  const [artistSuggestions, setArtistSuggestions] = useState<string[]>([]);
  const debouncedArtist = useDebounce(favoriteArtist, 300);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const isSelectingRef = useRef(false);
  const genreSelectRef = useRef<HTMLDivElement>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shouldFocus, setShouldFocus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target as Node)
      ) {
        setArtistSuggestions([]);
      }
      if (
        genreSelectRef.current &&
        !genreSelectRef.current.contains(e.target as Node)
      ) {
        setGenreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchArtistSuggestions = async () => {
      if (isSelectingRef.current) {
        isSelectingRef.current = false;
        return;
      }
      if (!debouncedArtist.trim()) return;
      try {
        const token = await getSpotifyAccessToken();
        const results = await searchArtist(debouncedArtist, token);
        const simplified = results.map(
          (artist: { name: string }) => artist.name
        );
        setArtistSuggestions(simplified);
      } catch (e) {
        console.error("아티스트 검색 실패:", e);
      }
    };
    fetchArtistSuggestions();
  }, [debouncedArtist]);

  useEffect(() => {
    if (isSubmitted) {
      setShouldFocus(true);
    }
  }, [isSubmitted]);

  useEffect(() => {
    if (!isSubmitted || !shouldFocus) return;

    const timer = setTimeout(() => {
      if (nameError) nameRef.current?.focus();
      else if (emailError) emailRef.current?.focus();
      else if (passwordError) passwordRef.current?.focus();
      else if (confirmPasswordError) confirmPasswordRef.current?.focus();

      setShouldFocus(false);
    }, 0);

    return () => clearTimeout(timer);
  }, [
    isSubmitted,
    shouldFocus,
    nameError,
    emailError,
    passwordError,
    confirmPasswordError,
  ]);

  const validateSignupForm = (): boolean => {
    let valid = true;

    if (!name.trim()) {
      setNameError("이름/닉네임을 입력해주세요.");
      valid = false;
    } else setNameError("");

    if (!email.trim()) {
      setEmailError("이메일을 입력해주세요.");
      valid = false;
    } else if (!allowedDomains.includes(email.split("@")[1])) {
      setEmailError("gmail.com 또는 naver.com 이메일만 사용할 수 있습니다.");
      valid = false;
    } else if (!emailError) {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
      valid = false;
    } else setPasswordError("");

    if (!confirmPassword) {
      setConfirmPasswordError("비밀번호 확인을 입력해주세요.");
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("비밀번호가 불일치 합니다.");
      valid = false;
    } else setConfirmPasswordError("");

    return valid;
  };

  const handleSignup = async () => {
    const isValid = validateSignupForm();

    setIsSubmitted(true);

    if (!isValid) {
      setShouldFocus(false);
      setTimeout(() => {
        setShouldFocus(true);
      }, 0);
      return;
    }

    try {
      const response = await signupUser(
        name,
        email,
        password,
        favoriteGenre,
        favoriteArtist
      );
      console.log("회원가입 성공:", response);
      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        setEmailError("중복된 메일 입니다.");
      } else {
        console.error("회원가입 오류:", error);
      }
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] w-full flex overflow-visible">
      <div className="w-[50%] bg-[#1B1C1E] relative">
        <div className="flex items-center justify-center h-full">
          <img
            src={loginGroup}
            alt="캐릭터"
            className="w-[70%] max-w-[500px] object-contain"
          />
        </div>
        <div className="absolute bottom-[5%] right-[10%]">
          <img src={logo} alt="POPcon 로고" className="w-[200px] h-auto" />
        </div>
      </div>

      <div className="w-[50%] bg-[#333333] flex items-center justify-center">
        <div className="w-[80%] max-w-[700px]">
          <h2 className="text-white text-2xl font-bold mb-6">SIGN UP</h2>

          <div className="flex items-center justify-between mb-2">
            <label className="text-white text-lg font-bold">이름/닉네임</label>
            {isSubmitted && nameError && (
              <p className="text-[#E42F42] text-sm">{nameError}</p>
            )}
          </div>
          <input
            type="text"
            ref={nameRef}
            placeholder="popcon"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (e.target.value.trim()) {
                setNameError("");
              }
            }}
            className={`w-full mb-3 px-4 py-2 rounded-[10px] border ${
              nameError ? "border-[#E42F42]" : "border-white"
            } focus:outline-none focus:border-[#8EF3BF]`}
          />

          <div className="flex items-center justify-between mb-2">
            <label className="text-white text-lg font-bold">이메일</label>
            {isSubmitted && emailError && (
              <p className="text-[#E42F42] text-sm">{emailError}</p>
            )}
          </div>
          <input
            type="email"
            ref={emailRef}
            placeholder="user@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value.trim() && emailError) {
                setEmailError("");
              }
            }}
            className={`w-full mb-3 px-4 py-2 rounded-[10px] border ${
              emailError ? "border-[#E42F42]" : "border-white"
            } focus:outline-none focus:border-[#8EF3BF]`}
          />

          <div className="flex items-center justify-between mb-2">
            <label className="text-white text-lg font-bold">비밀번호</label>
            {isSubmitted && passwordError && (
              <p className="text-[#E42F42] text-sm">{passwordError}</p>
            )}
          </div>
          <input
            type="password"
            ref={passwordRef}
            placeholder="Your password"
            value={password}
            onChange={(e) => {
              const value = e.target.value;
              setPassword(value);
              if (value.trim()) {
                setPasswordError("");
              }
              if (confirmPassword) {
                if (value === confirmPassword) {
                  setConfirmPasswordError("");
                } else {
                  setConfirmPasswordError("비밀번호 불일치");
                }
              }
            }}
            className={`w-full mb-3 px-4 py-2 rounded-[10px] border ${
              passwordError ? "border-[#E42F42]" : "border-white"
            } focus:outline-none focus:border-[#8EF3BF]`}
          />

          <div className="flex items-center justify-between mb-2">
            <label className="text-white text-lg font-bold">
              비밀번호 확인
            </label>
            {confirmPasswordError && (
              <p className="text-[#E42F42] text-sm">{confirmPasswordError}</p>
            )}
          </div>
          <input
            type="password"
            ref={confirmPasswordRef}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => {
              const value = e.target.value;
              setConfirmPassword(value);

              if (!value) {
                setConfirmPasswordError("비밀번호 확인을 입력해주세요.");
              } else if (value !== password) {
                setConfirmPasswordError("비밀번호 불일치");
              } else {
                setConfirmPasswordError("");
              }
            }}
            className={`w-full mb-3 px-4 py-2 rounded-[10px] border ${
              confirmPasswordError ? "border-[#E42F42]" : "border-white"
            } focus:outline-none focus:border-[#8EF3BF]`}
          />

          <div className="flex gap-2">
            <div className="w-1/2 relative" ref={suggestionsRef}>
              <label className="block mb-1 text-white">
                좋아하는 가수 (선택)
              </label>
              <input
                type="text"
                placeholder="Lauv"
                value={favoriteArtist}
                onChange={(e) => setFavoriteArtist(e.target.value)}
                className="w-full h-[48px] px-4 rounded-[10px] border border-white bg-[#333333] text-white focus:border-[#71EBBE] focus:outline-none"
              />
              {artistSuggestions.length > 0 && (
                <ul className="absolute mt-1 bg-[#333333] border border-[#71EBBE] text-white rounded-[10px] w-full max-h-[100px] overflow-y-auto">
                  {artistSuggestions.map((name, index) => (
                    <li
                      key={`${name}-${index}`}
                      onMouseDown={() => {
                        isSelectingRef.current = true;
                        setFavoriteArtist(name);
                        setArtistSuggestions([]);
                      }}
                      className="px-4 py-2 hover:bg-[#71EBBE] hover:text-[#333333] cursor-pointer"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="w-1/2 relative" ref={genreSelectRef}>
              <label className="block mb-1 text-white">좋아하는 장르</label>
              <div
                role="button"
                tabIndex={0}
                onFocus={() => setGenreDropdownOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setGenreDropdownOpen((prev) => !prev);
                  }
                }}
                className={`w-full h-[48px] px-4 text-left border bg-[#333333] text-white rounded-[10px] flex items-center cursor-pointer focus:outline-none ${
                  genreDropdownOpen ? "border-[#71EBBE]" : "border-white"
                }`}
              >
                {favoriteGenre}
              </div>
              {genreDropdownOpen && (
                <ul className="absolute mt-1 w-full max-h-[100px] overflow-auto bg-[#333333] border border-[#71EBBE] rounded-[10px] z-10">
                  {genres.map((genre) => (
                    <li
                      key={genre}
                      onMouseDown={() => {
                        setFavoriteGenre(genre);
                        setGenreDropdownOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-[#71EBBE] hover:text-[#333333] cursor-pointer"
                    >
                      {genre}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <button
            onClick={handleSignup}
            className="w-full bg-[#71EBBE] text-black py-2 rounded-md font-semibold mb-2 flex items-center justify-center mt-4 cursor-pointer"
          >
            <img src={logoPopcon} alt="팝콘로고" className="mr-2" />
            팝콘 회원가입
          </button>

          <p className="text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <Link to="/Login" className="text-[#71EBBE] underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
