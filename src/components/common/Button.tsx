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
      "w-[160px] h-[54px] rounded-[30px] bg-[#8EF3BF] text-black cursor-pointer",
    delete:
      "w-[160px] h-[54px] rounded-[30px] border border-[#8EF3BF] text-black cursor-pointer",
    default:
      "w-[153px] h-[53px] rounded-[30px] border border-white text-black cursor-pointer",
  };

  return (
    <button className={twMerge(variantClasses[variant], className)} {...rest}>
      {children}
    </button>
  );
}
