// components/VideoSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import type { YoutubeVideo } from "@/lib/queries";

export default function VideoSection({ video }: { video: YoutubeVideo | null }) {
  const [playing, setPlaying] = useState(false);

  if (!video) return null;

  const { youtubeId, title, ctaLabel, ctaHref } = video;
  const thumbnail = `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;

  return (
    <section className="w-full bg-white py-10 sm:py-24 lg:py-10">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl ring-1 ring-neutral-200">
          {playing ? (
            <iframe
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play video: ${title}`}
              className="group absolute inset-0 h-full w-full"
            >
              <Image
                src={thumbnail}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 1152px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
              <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2
                               items-center justify-center rounded-2xl bg-red-600 shadow-2xl
                               transition-transform duration-300 group-hover:scale-110">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </div>

        {ctaLabel && (
          <div className="mt-12 flex justify-center">
            <a
              href={ctaHref ?? "#"}
              className="inline-flex items-center justify-center rounded-full
                         bg-orange-500 px-10 py-4 text-base font-semibold text-white
                         transition hover:bg-orange-600 sm:text-lg"
            >
              {ctaLabel}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}