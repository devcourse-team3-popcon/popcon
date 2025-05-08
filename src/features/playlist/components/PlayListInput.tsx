import { Search } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function PlayListInput({
  className,
  placeholder,
  onChange,
}: PlayListInputProps) {
  const inputClass = twMerge(
    "border border-[#fbfbfb80] px-[54px] rounded-[10px] text-[16px] font-bold h-[40px] focus:outline-none focus:border-[color:var(--primary-200)] w-full text-[color:var(--grey-300)]",
    className
  );

  return (
    <div className="relative w-full px-8">
      <input
        type="text"
        className={inputClass}
        placeholder={placeholder}
        onChange={onChange}
      />
      <Search className="absolute top-[8px] left-[48px] text-[#fbfbfb80]" />
    </div>
  );
}
