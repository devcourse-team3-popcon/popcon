import { twMerge } from "tailwind-merge";
type InputFieldProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  maxLength?: number;
};

export default function InputField({
  label,
  id,
  name,
  value,
  placeholder,
  type = "text",
  autoComplete,
  onChange,
  className = "",
  maxLength,
}: InputFieldProps) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          type={type}
          autoComplete={autoComplete}
          onChange={onChange}
          maxLength={maxLength}
          className={twMerge(
            className,
            "border px-4 rounded-[10px] text-[16px] focus:outline-none w-full",
            value
              ? "border-[color:var(--primary-200)]"
              : "border-[color:var(--white-80)] focus:border-[color:var(--primary-200)]"
          )}
        />
      </div>
    </>
  );
}
