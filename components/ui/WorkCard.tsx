// components/WorkCard.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import type { Work } from "@/lib/queries";

export default function WorkCard({
  work,
  onOpen,
}: {
  work: Work;
  onOpen: (work: Work) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-neutral-200
                 transition-all duration-300 hover:shadow-2xl"
    >
      {/* Fake browser chrome */}
      <div className="flex items-center gap-2 bg-slate-700 px-3 py-2 text-[11px] text-slate-200">
        <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <span className="truncate opacity-80">{work.subtitle}</span>
      </div>

      {/* Screenshot viewport */}
      <div className="relative h-[280px] sm:h-[340px] overflow-hidden bg-neutral-100">
        <Image
          src={work.image}
          alt={work.imageAlt ?? work.title}
          width={1400}
          height={2400}
          className="h-auto w-full transition-transform duration-[4000ms] ease-in-out"
          style={{
            transform: hovered ? "translateY(calc(-100% + 280px))" : "translateY(0)",
          }}
        />

        {/* Hover overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center
                        bg-gradient-to-t from-black/60 via-black/0 to-black/0
                        opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => onOpen(work)}
            className="pointer-events-auto mb-5 rounded-full bg-white px-5 py-2 text-sm font-semibold
                       text-neutral-900 shadow-lg transition hover:bg-orange-400 hover:text-white"
          >
            View live site
          </button>
        </div>
      </div>

      {/* Bottom caption strip */}
      <div className="flex items-center justify-between gap-3 border-t border-neutral-100 bg-white px-4 py-3">
        <p className="truncate text-sm font-semibold text-neutral-800">{work.title}</p>
        <a
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase
                     tracking-wide text-white transition hover:bg-orange-600"
        >
          View more
        </a>
      </div>
    </div>
  );
}