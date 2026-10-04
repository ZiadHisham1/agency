// components/ui/Button.tsx
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "outline" | "solid" | "glass";
type Size = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 disabled:opacity-50";

const variants: Record<Variant, string> = {
  outline:
    "border border-white/70 text-white bg-transparent hover:bg-white hover:text-black",
  solid:
    "bg-orange-400 text-black hover:bg-orange-300 border border-orange-400",
  glass:
    "bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-white/20",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2 text-sm",
  lg: "px-8 py-3.5 text-lg",
};

export default function Button({
  variant = "outline",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}