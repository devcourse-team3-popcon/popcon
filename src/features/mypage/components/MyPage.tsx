import { useEffect, useRef, useState } from "react";
import loginGroup from "../../../assets/images/defaultProfile.svg";
import cameraIcon from "../../../assets/images/camera-icon.png";
import InputField from "../../../components/common/InputField";
import BackButton from "../../../components/common/BackButton";
import {
  logoutUser,
  myPageUpdatePhoto,
  myPageUserInfo,
  myPageUserInfoUpdate,
} from "../../../apis/mypage/mypage";
import { useNavigate } from "react-router";
import { getSpotifyAccessToken } from "../../../apis/spotify/getSpotifyAccessToken";
import { searchArtist } from "../../../apis/spotify/spotifySearch";
import CheckPassword from "./CheckPassword";

export default function MyPage() {
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
  const navigate = useNavigate();

  const [checkPassword, setCheckPassword] = useState<"view" | "check-password">(
    "view"
  );

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [favoriteArtist, setFavoriteArtist] = useState("");
  const [favoriteGenre, setFavoriteGenre] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [initialUserData, setInitialUserData] = useState({
    username: "",
    favoriteArtist: "",
    favoriteGenre: "",
  });

  const useDebounce = (value: string, delay: number) => {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
      const timer = setTimeout(() => setDebounced(value), delay);
      return () => clearTimeout(timer);
    }, [value, delay]);
    return debounced;
  };

  const [editMode, setEditMode] = useState(false);
  const [genreDropdownOpen, setGenreDropdownOpen] = useState(false);
  const genreSelectRef = useRef<HTMLDivElement>(null);

  const [userNameError, setuserNameError] = useState("");
  const userNameRef = useRef<HTMLInputElement>(null);
  const [mainProfileName, setMainProfileName] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const debouncedArtist = useDebounce(favoriteArtist, 300);
  const isSelectingRef = useRef(false);
  const [artistSuggestions, setArtistSuggestions] = useState<string[]>([]);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchArtistSuggestions = async () => {
      if (!editMode) return;
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
    const fetchUserInfo = async () => {
      try {
        const user = await myPageUserInfo();
        const parsed = JSON.parse(user.fullName);
        const data = {
          username: parsed.name,
          favoriteGenre: parsed.favoriteGenre,
          favoriteArtist: parsed.favoriteArtist,
          email: user.email,
        };
        setInitialUserData(data);

        setUsername(parsed.name);
        setMainProfileName(parsed.name);
        setFavoriteGenre(parsed.favoriteGenre);
        setFavoriteArtist(parsed.favoriteArtist);
        setEmail(user.email);

        if (user.image) {
          setImageUrl(user.image);
        }
      } catch (e) {
        console.error("유저 정보 가져오기 실패:", e);
      }
    };
    fetchUserInfo();
  }, []);

  const handleUpdate = async () => {
    if (!username.trim()) {
      setuserNameError("사용자 이름을 입력해주세요.");
      userNameRef.current?.focus();
      return;
    }

    setuserNameError("");

    try {
      await myPageUserInfoUpdate(username, favoriteGenre, favoriteArtist);

      setEditMode(false);
      setInitialUserData({
        username,
        favoriteArtist,
        favoriteGenre,
      });
    } catch (err) {
      console.error("유저 정보 저장 실패:", err);
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      await myPageUpdatePhoto(file);

      const previewUrl = URL.createObjectURL(file);
      setImageUrl(previewUrl);
    } catch (err) {
      console.error("이미지 업로드 실패:", err);
    }
  };

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };
  return (
    <div className="min-h-screen bg-[#1B1C1E] text-white flex flex-col items-center py-10 px-4">
      <div className="w-full flex justify-between items-center mb-4">
        <BackButton />
        <button
          onClick={() => navigate("/MyPostList")}
          className="text-[color:var(--grey-300)] text-sm px-4 py-2 border border-[color:var(--white-80)] rounded-[10px] h-10 hover:border-[color:var(--primary-200)] hover:text-[color:var(--primary-200)]"
        >
          작성한 게시글 보기
        </button>
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      <div className="flex flex-col items-center w-full max-w-[240px]">
        <div className="relative w-full aspect-square mt-[32px]">
          <img
            src={imageUrl || loginGroup}
            alt="프로필 사진"
            className="w-full h-full rounded-full object-cover"
          />
          {editMode && (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-0 right-0 w-[56px] h-[56px] bg-[#8EF3BF] rounded-full flex items-center justify-center cursor-pointer"
            >
              <img src={cameraIcon} alt="카메라 아이콘" />
            </div>
          )}
        </div>
        <p className="mt-[32px] text-[24px] md:text-[32px] font-semibold text-center">
          {mainProfileName}
        </p>
      </div>

      <div className="mt-[40px] w-full max-w-[1049px] bg-[#333333]/[0.35] rounded-[30px] pt-[80px] px-4 md:px-[120px] flex flex-col">
        {checkPassword === "view" ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-[48px]">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <label htmlFor="username" className="font-semibold">
                    사용자 이름
                  </label>
                  {userNameError && (
                    <span className="text-[14px] text-[#E42F42]">
                      {userNameError}
                    </span>
                  )}
                </div>
                <input
                  id="username"
                  ref={userNameRef}
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (userNameError) setuserNameError("");
                  }}
                  placeholder="user name"
                  disabled={!editMode}
                  className={`w-full h-10 px-4 rounded-[10px] text-[16px] border ${
                    userNameError
                      ? "border-[#E42F42] focus:border-[#E42F42]"
                      : "border-[color:var(--white-80)] focus:border-[color:var(--primary-200)]"
                  } bg-transparent text-white focus:outline-none`}
                />
              </div>

              <InputField
                label="이메일"
                id="email"
                name="email"
                type="email"
                disabled
                value={email}
                placeholder="user@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-[48px]">
              <div
                className="relative flex flex-col gap-4 w-full"
                ref={suggestionsRef}
              >
                <label htmlFor="favoriteArtist" className="text-[16px]">
                  좋아하는 가수 (선택)
                </label>
                <input
                  type="text"
                  id="favoriteArtist"
                  placeholder="Lauv"
                  value={favoriteArtist}
                  onChange={(e) => setFavoriteArtist(e.target.value)}
                  disabled={!editMode}
                  className={
                    "w-full h-[40px] px-4 text-left text-[16px] flex items-center rounded-[10px] border " +
                    (editMode ? "cursor-text " : "pointer-events-none ") +
                    (artistSuggestions.length > 0
                      ? "border-[color:var(--primary-200)] "
                      : "border-[color:var(--white-80)] ") +
                    "focus:border-[color:var(--primary-200)] focus:outline-none"
                  }
                />

                {editMode && artistSuggestions.length > 0 && (
                  <ul className="absolute top-full left-0 right-0 mt-1 border rounded-[10px] bg-[color:var(--bg-color)] shadow z-10 max-h-60 overflow-y-auto border-[color:var(--primary-200)]">
                    {artistSuggestions.map((name, index) => (
                      <li
                        key={`${name}-${index}`}
                        onMouseDown={() => {
                          isSelectingRef.current = true;
                          setFavoriteArtist(name);
                          setArtistSuggestions([]);
                        }}
                        className="px-4 py-[10px] text-[14px] hover:bg-[color:var(--grey-600)] hover:text-white cursor-pointer transition-colors duration-100"
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div
                className="flex flex-col gap-4 relative"
                ref={genreSelectRef}
              >
                <label htmlFor="favoriteGenre" className="text-[16px]">
                  좋아하는 장르 (선택)
                </label>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    editMode && setGenreDropdownOpen((prev) => !prev)
                  }
                  onBlur={() =>
                    setTimeout(() => setGenreDropdownOpen(false), 100)
                  }
                  className={`w-full h-[40px] px-4 text-left text-[16px] flex items-center rounded-[10px] border ${
                    editMode ? "cursor-pointer" : "pointer-events-none "
                  } ${
                    genreDropdownOpen
                      ? "border-[color:var(--primary-200)]"
                      : "border-[color:var(--white-80)]"
                  }`}
                >
                  {favoriteGenre || "선택하세요"}
                </div>
                {genreDropdownOpen && (
                  <ul className="absolute top-full left-0 right-0 mt-1 border rounded-[10px] bg-[color:var(--bg-color)] shadow z-10 max-h-60 overflow-y-auto border-[color:var(--primary-200)]">
                    {genres.map((genre) => (
                      <li
                        key={genre}
                        onMouseDown={() => {
                          setFavoriteGenre(genre);
                          setGenreDropdownOpen(false);
                        }}
                        className="px-4 py-[10px] text-[14px] hover:bg-[color:var(--grey-600)] hover:text-white cursor-pointer transition-colors duration-100"
                      >
                        {genre}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="flex justify-center gap-4 mb-[40px]">
              {editMode ? (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setUsername(initialUserData.username);
                      setFavoriteArtist(initialUserData.favoriteArtist);
                      setFavoriteGenre(initialUserData.favoriteGenre);
                      setEditMode(false);
                    }}
                    className="px-[48px] py-[16px] rounded-[30px] border border-[#8B8B8B] text-[#EFEFEF] text-[18px] font-bold cursor-pointer"
                  >
                    취소하기
                  </button>

                  <button
                    type="submit"
                    onClick={() => handleUpdate()}
                    className="px-[48px] py-[16px] rounded-[30px] bg-[#8EF3BF] text-[#1B1C1E] text-[18px] font-bold cursor-pointer"
                  >
                    저장하기
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setEditMode(true)}
                  className="px-[48px] py-[16px] rounded-[30px] bg-[#8EF3BF] text-[#1B1C1E] text-[18px] font-bold cursor-pointer"
                >
                  수정하기
                </button>
              )}
            </div>{" "}
          </>
        ) : (
          <CheckPassword
            email={email}
            onCheckPassword={() => setCheckPassword("view")}
          />
        )}
      </div>

      <div className="mt-[80px] w-[324px] h-[21px] flex items-center justify-center text-[18px] text-[#EFEFEF]">
        <button
          onClick={() => setCheckPassword("check-password")}
          className="hover:underline cursor-pointer"
        >
          비밀번호 변경
        </button>
        <span className="px-3 text-[#EFEFEF]">|</span>
        <button
          onClick={handleLogout}
          className="hover:underline cursor-pointer"
        >
          로그아웃
        </button>
        <span className="px-3 text-[#EFEFEF]">|</span>
        <button className="hover:underline cursor-pointer text-[#E42F42]">
          회원 탈퇴
        </button>
      </div>
    </div>
  );
}
