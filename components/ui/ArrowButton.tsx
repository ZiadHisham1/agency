// components/ui/ArrowButton.tsx
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "prev" | "next";
}

export default function ArrowButton({ direction, className = "", ...rest }: Props) {
  return (
    <button
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className={`flex h-14 w-14 items-center justify-center rounded-full
                  border border-white/40 bg-white/10 text-white backdrop-blur-md
                  transition hover:bg-white hover:text-black ${className}`}
      {...rest}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {direction === "prev" ? (
          <path d="M19 12H5M12 19l-7-7 7-7" />
        ) : (
          <path d="M5 12h14M12 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}