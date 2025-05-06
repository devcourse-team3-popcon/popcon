import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className="flex px-[18px] py-[8px] gap-[8px] text-[18px] text-[color:var(--grey-300)] justify-center items-center cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <ChevronLeft className="w-[24px] h-[24px] text-[color:var(--grey-300)]" />
      Back
    </button>
  );
}
