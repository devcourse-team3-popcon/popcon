import { twMerge } from "tailwind-merge";
type Variant = "success" | "delete" | "default";
type ButtonProps = {
  variant: "success" | "delete" | "default";
} & React.ComponentPropsWithoutRef<"button">;
export default function ButtonComponent({
  children,
  className,
  variant,
  ...rest
}: ButtonProps) {
  const variantClasses: Record<Variant, string> = {
    success:
      "px-[48px] py-[16px] rounded-[30px] bg-[#8EF3BF] text-[#1B1C1E] text-[18px] font-bold cursor-pointer",
    delete:
      "px-[48px] py-[16px] rounded-[30px] border border-[#71EBBE] text-[#A7AFAB] text-[18px] cursor-pointer",
    default:
      "px-[48px] py-[16px] rounded-[30px] border border-[#8B8B8B] text-[#8B8B8B] text-[18px] cursor-pointer",
  };

  return (
    <button className={twMerge(variantClasses[variant], className)} {...rest}>
      {children}
    </button>
  );
}
