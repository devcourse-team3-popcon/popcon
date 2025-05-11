import { useNavigate } from "react-router";

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
        <p className="font-[MonumentExtended] text-[color:var(--primary-300)] text-[18px] lg:text-[28px]">
          POPcon <span className="text-[color:var(--white)]">.</span>
        </p>
      </div>
    </>
  );
}
