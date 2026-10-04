// components/FaqList.tsx
"use client";

import { useState } from "react";
import type { Faq } from "@/lib/queries";

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?._id ?? null);

  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <div className="mt-14 divide-y divide-neutral-200 overflow-hidden rounded-2xl
                    bg-white shadow-md ring-1 ring-neutral-100">
      {faqs.map((faq) => {
        const isOpen = openId === faq._id;
        return (
          <div key={faq._id}>
            <button
              type="button"
              onClick={() => toggle(faq._id)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${faq._id}`}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left
                         transition hover:bg-neutral-50 sm:px-8 sm:py-6"
            >
              <span className="text-base font-semibold text-neutral-900 sm:text-lg">
                {faq.question}
              </span>

              {/* Plus/minus icon */}
              <span
                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full
                            bg-orange-500 text-white transition-transform duration-300
                            ${isOpen ? "rotate-45" : "rotate-0"}`}
                aria-hidden="true"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="3"
                     strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>

            <div
              id={`faq-panel-${faq._id}`}
              role="region"
              aria-labelledby={`faq-${faq._id}`}
              className={`grid transition-all duration-300 ease-out
                          ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-neutral-600
                              sm:px-8 sm:pb-8 sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}