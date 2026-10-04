// components/Navbar.tsx
"use client";
import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "Home",     href:"/home" },
  { label: "shopify",     href:"/service/shopify" },
  { label: "word-press",  href: "/service/wordpress" },
  { label: "e-commerce",  href: "/service/e-commerce" },
  { label: "customized",  href: "/service/customized" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Glass bar */}
      <nav className="bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex items-end leading-none select-none">
            <Image src="/logo.svg" alt="Logo" width={120} height={150} unoptimized />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-full border border-white/30 px-4 py-1.5 text-sm text-white/90
                           transition hover:bg-white/10 hover:border-white/60"
              >
                {l.label}
              </a>
            ))}

            {/* AI pill */}
            <button
              className="rounded-full bg-orange-400 px-4 py-1.5 text-sm font-semibold text-black
                         transition hover:bg-orange-300"
            >
              AI
            </button>
          </div>

          {/* Desktop CTA */}
          <a
            href="#"
            className="hidden md:inline-flex rounded-full border border-white/40 px-5 py-1.5 text-sm
                       text-white transition hover:bg-white/10"
          >
            Hire us
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-md p-2 text-white hover:bg-white/10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300
                      ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="space-y-3 border-t border-white/10 bg-black/80 px-4 py-4 backdrop-blur-md">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-full border border-white/30 px-4 py-2 text-center text-sm text-white/90
                           transition hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}

            <button
              className="w-full rounded-full bg-orange-400 px-4 py-2 text-sm font-semibold text-black
                         transition hover:bg-orange-300"
            >
              AI
            </button>

            <a
              href="#"
              onClick={() => setOpen(false)}
              className="block rounded-full border border-white/40 px-4 py-2 text-center text-sm text-white
                         transition hover:bg-white/10"
            >
              Hire us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}