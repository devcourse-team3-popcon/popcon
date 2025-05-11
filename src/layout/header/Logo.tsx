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
        <p className="font-[MonumentExtended] text-[color:var(--primary-300)] text-[20px] lg:text-[22px] 2xl:text-[26px]">
          POPcon <span className="text-[color:var(--white)]">.</span>
        </p>
      </div>
    </>
  );
}
