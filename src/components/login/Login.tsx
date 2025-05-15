import { useEffect, useRef, useState } from "react";
import loginGroup from "../../assets/images/login-group.svg";
import logo from "../../assets/images/logo-no-period.svg";
import logoPopcon from "../../assets/images/logo-login-popcon.svg";
import logoKakao from "../../assets/images/logo-kakao.svg";
import { Link, useNavigate } from "react-router";
import { loginUser, signupUser } from "../../apis/login/login";
import {
  initKakaoSdk,
  loadKakaoSdk,
  loginWithKakao,
} from "../../apis/login/socialLogin";
import axios from "axios";
import { useAuthStore } from "../../stores/authStore";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      try {
        await loadKakaoSdk();
        initKakaoSdk(import.meta.env.VITE_KAKAO_JS_KEY);
      } catch (error) {
        console.error("카카오 SDK 로딩 실패:", error);
      }
    };
    init();
  }, []);

  const handleKakaoLogin = async () => {
    let kakaoEmail = "";
    let kakaoPassword = "kakao_dummy_password";
    try {
      const res = await loginWithKakao();

      const nickname = res.kakao_account?.profile?.nickname ?? "kakao_user";
      const id = res.id;
      const fakeEmail = `${nickname}_${id}@kakao.com`;

      const name = nickname;
      kakaoEmail = fakeEmail;
      kakaoPassword = "kakao_dummy_password";
      const favoriteGenre = "Hip-hop";
      const result = await signupUser(
        name,
        kakaoEmail,
        kakaoPassword,
        favoriteGenre
      );
      console.log("회원가입 성공:", result);
      await loginUser(kakaoEmail, kakaoPassword);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        console.warn("이미 가입된 사용자 → 로그인 시도");
        const response = await loginUser(kakaoEmail, kakaoPassword);
        const encoded = btoa(btoa(response.token));
        localStorage.setItem(
          "app_state",
          JSON.stringify({
            logindt: Date.now(),
            version: "5.5.10",
            login_session: encoded,
          })
        );
        useAuthStore.getState().login(response.token);
        navigate("/");
      } else {
        console.error("회원가입 실패:", error);
      }
    }
  };

  const handleLogin = async () => {
    let valid = true;

    if (!email.trim()) {
      setEmailError("이메일을 입력해주세요.");
      emailRef.current?.focus();
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("비밀번호를 입력해주세요.");
      if (valid) passwordRef.current?.focus();
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) return;

    try {
      const response = await loginUser(email, password);
      console.log("로그인 성공:", response);

      const encoded = btoa(btoa(response.token));
      localStorage.setItem(
        "app_state",
        JSON.stringify({
          logindt: Date.now(),
          version: "5.5.09",
          login_session: encoded,
        })
      );

      useAuthStore.getState().login(response.token);
      navigate("/");
    } catch (error) {
      console.error("로그인 실패:", error);
      setEmailError("이메일 또는 비밀번호가 올바르지 않습니다.");
      setPasswordError(" ");
      emailRef.current?.focus();
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] w-full flex overflow-hidden">
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
          <h2 className="text-white text-2xl font-bold mb-6">WELCOME BACK</h2>
          <div className="flex items-center justify-between mb-2">
            <label className="text-white text-lg font-bold">팝콘 이메일</label>
            {emailError && (
              <p className="text-[#E42F42] text-sm whitespace-nowrap">
                {emailError}
              </p>
            )}
          </div>
          <input
            type="email"
            ref={emailRef}
            placeholder="user@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value.trim()) setEmailError("");
            }}
            className={`w-full mb-3 px-4 py-2 rounded-[10px] border ${
              emailError ? "border-[#E42F42]" : "border-white"
            } focus:outline-none focus:border-[#8EF3BF]`}
          />

          <div className="flex items-center justify-between mb-2">
            <label className="text-white text-lg font-bold">
              팝콘 비밀번호
            </label>
            {passwordError && (
              <p className="text-[#E42F42] text-sm whitespace-nowrap">
                {passwordError}
              </p>
            )}
          </div>
          <input
            type="password"
            ref={passwordRef}
            placeholder="Your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value.trim()) setPasswordError("");
            }}
            className={`w-full mb-3 px-4 py-2 rounded-[10px] border ${
              passwordError ? "border-[#E42F42]" : "border-white"
            } focus:outline-none focus:border-[#8EF3BF]`}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-[#71EBBE] text-black py-2 rounded-md font-semibold mb-2 flex items-center justify-center cursor-pointer"
          >
            <img src={logoPopcon} alt="팝콘로고" className="mr-2" />
            팝콘 로그인
          </button>

          <button
            onClick={handleKakaoLogin}
            className="w-full bg-[#FEE500] text-black py-2 rounded-md font-semibold mb-2 flex items-center justify-center border-2 border-[#FEE500] cursor-pointer"
          >
            <img src={logoKakao} alt="카카오로고" className="mr-2" />
            카카오 로그인
          </button>

          <p className="text-sm text-gray-400 mt-6">
            Do not have an account yet?{" "}
            <Link to="/signup-agree" className="text-[#71EBBE] underline">
              Sign up.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
