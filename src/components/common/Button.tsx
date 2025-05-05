import { twMerge } from "tailwind-merge";
type Variant = "success" | "delete";
type ButtonProps = {
  variant: "success" | "delete";
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
  };

  return (
    <button className={twMerge(variantClasses[variant], className)} {...rest}>
      {children}
    </button>
  );
}
