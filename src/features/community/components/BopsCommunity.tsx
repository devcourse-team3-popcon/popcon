import { Plus } from "lucide-react";
import { useNavigate } from "react-router";

export default function BopsCommunity() {
  const navigate = useNavigate();
  return (
    <>
      <p className="text-[30px] font-semibold">
        여기는 숨겨진 명곡들의 성지 🔮
      </p>
      <Plus className="cursor-pointer" onClick={() => navigate("add")} />
    </>
  );
}
