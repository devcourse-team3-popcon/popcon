import { Send } from "lucide-react";
import useSendMessage from "../hooks/useSendMessage";
import { useRefreshStore } from "../stores/refreshStore";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  placeholder?: string;
  className?: string;
  userId: string;
}

export default function TextBox({
  value,
  onChange,
  onClear,
  placeholder = "메세지를 작성해주세요",
  className = "",
  userId,
}: SearchBarProps) {
  const sendMessage = useSendMessage();
  const refreshMessages = useRefreshStore((state) => state.refreshMessages);

  const sendMsgHandler = async (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();

    if (!value.trim()) return;

    await sendMessage({ message: value, userId });

    refreshMessages?.();
    onClear();
  };

  return (
    <>
      <form onSubmit={sendMsgHandler} className={`relative ${className}`}>
        <input
          type="text"
          className="w-full border border-[color:var(--white-80)] pl-[32px] pr-[68px] rounded-[10px] text-[18px] h-[64px] focus:outline-none focus:border-[color:var(--primary-200)] bg-transparent text-white"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <Send
          className="absolute right-8 top-1/2 transform -translate-y-1/2 text-[color:var(--white-80)] cursor-pointer"
          onClick={sendMsgHandler}
        />
      </form>
    </>
  );
}
