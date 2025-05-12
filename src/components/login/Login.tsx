import { useEffect, useState } from "react";
import loginGroup from "../../assets/images/login-group.svg";
import logo from "../../assets/images/logo-no-period.svg";
import logoPopcon from "../../assets/images/logo-login-popcon.svg";
import logoKakao from "../../assets/images/logo-kakao.svg";
import logoNaver from "../../assets/images/logo-naver.svg";
import { Link, useNavigate } from "react-router";
import { loginUser, signupUser } from "../../apis/login/login";
import {
  initKakaoSdk,
  loadKakaoSdk,
  loginWithKakao,
} from "../../apis/login/socialLogin";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      const result = await signupUser(name, kakaoEmail, kakaoPassword);
      console.log("회원가입 성공:", result);
      await loginUser(kakaoEmail, kakaoPassword);
      alert("회원가입 성공!");
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
        navigate("/");
      } else {
        console.error("회원가입 실패:", error);
      }
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }
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
      navigate("/");
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인에 실패했습니다. 이메일/비밀번호를 확인해주세요.");
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
          <h2 className="text-white text-lg font-bold mb-2">팝콘 이메일</h2>
          <input
            type="email"
            placeholder="user@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 px-4 py-2 rounded-[10px] border border-white focus:border-[#8EF3BF] focus:outline-none"
          />

          <h2 className="text-white text-lg font-bold mb-2">팝콘 비밀번호</h2>
          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-3 px-4 py-2 rounded-[10px] border border-white focus:border-[#8EF3BF] focus:outline-none"
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

          <button className="w-full bg-[#03C75A] text-white py-2 rounded-md font-semibold flex items-center justify-center border-2 border-[#03C75A] cursor-pointer">
            <img src={logoNaver} alt="네이버로고" className="mr-2" />
            네이버 로그인
          </button>

          <p className="text-sm text-gray-400 mt-6">
            Do not have an account yet?{" "}
            <Link to="/SignupAgree" className="text-[#71EBBE] underline">
              Sign up.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
