import { useNavigate } from "react-router";
import logo from "../../assets/images/logo-text.svg";

export default function Logo() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <div
        className="flex h-[88px] items-center cursor-pointer"
        onClick={handleGoHome}
      >
        <img src={logo} alt="로고" />
      </div>
    </>
  );
}
