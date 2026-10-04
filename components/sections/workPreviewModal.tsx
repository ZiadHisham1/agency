// components/WorkPreviewModal.tsx
"use client";

import { useEffect } from "react";
import type { Work } from "@/lib/queries";

export default function WorkPreviewModal({
  work,
  onClose,
}: {
  work: Work | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (work) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [work, onClose]);

  if (!work) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-slate-700 shadow-2xl"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3 text-sm text-white">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 truncate rounded-md bg-white/10 px-3 py-1 text-xs text-white/80">
            {work.url}
          </div>
          <a
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white hover:bg-orange-600"
          >
            Open in new tab
          </a>
          <button
            onClick={onClose}
            aria-label="Close preview"
            className="flex h-7 w-7 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Live iframe */}
        <iframe
          src={work.url}
          title={work.title}
          className="h-full w-full flex-1 bg-white"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      </div>
    </div>
  );
}