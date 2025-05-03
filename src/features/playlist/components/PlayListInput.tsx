import { Search } from "lucide-react";
import { twMerge } from "tailwind-merge";

type PlayListInputProps = {
  className?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PlayListInput({
  className,
  placeholder,
  onChange,
}: PlayListInputProps) {
  const inputClass = twMerge(
    "border border-[#fbfbfb80] px-[54px] rounded-[10px] text-[16px] font-bold h-[40px] focus:outline-none focus:border-[color:var(--primary-200)] w-[640px] text-[color:var(--grey-300)]",
    className
  );

  return (
    <div className="relative">
      <input
        type="text"
        className={inputClass}
        placeholder={placeholder}
        onChange={onChange}
      />
      <Search className="absolute top-[8px] left-[16px] text-[#fbfbfb80]" />
    </div>
  );
}
