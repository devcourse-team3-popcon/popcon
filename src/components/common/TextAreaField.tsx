import { twMerge } from "tailwind-merge";

type TextAreaFieldProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  autoComplete?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  maxLength?: number;
};
export default function TextAreaField({
  label,
  id,
  name,
  value,
  placeholder,
  autoComplete,
  onChange,
  className = "",
  maxLength,
}: TextAreaFieldProps) {
  return (
    <div className={twMerge("flex flex-col gap-4 w-full", className)}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        maxLength={maxLength}
        className="border border-[color:var(--white-80)] px-4 py-3 rounded-[10px] text-[16px] focus:outline-none focus:border-[color:var(--primary-200)] h-[240px] resize-none placeholder:text-[color:var(--white-80)] w-full"
      />
    </div>
  );
}
