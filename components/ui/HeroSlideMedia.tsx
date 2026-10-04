// components/HeroSlideMedia.tsx
"use client";

import Image from "next/image";
import type { HeroSlide } from "@/lib/queries";

export default function HeroSlideMedia({
  slide,
  isActive,
}: {
  slide: HeroSlide;
  isActive: boolean;
}) {
  const type = slide.mediaType ?? (slide.image ? "image" : undefined);

  // ─── Image ───
  if (type === "image" && slide.image) {
    return (
      <Image
        src={slide.image}
        alt={slide.imageAlt ?? slide.title}
        fill
        sizes="100vw"
        priority={isActive}
        className="object-cover"
      />
    );
  }

  // ─── YouTube ───
  if (type === "youtube" && slide.youtubeId) {
    // Only mount the iframe when active — saves bandwidth and prevents
    // multiple videos playing in the background.
    if (!isActive) return null;

    return (
      <iframe
        // autoplay=1, mute=1, loop=1 with playlist=<id> (YouTube quirk: loop
        // requires playlist= to work). controls=0 hides the UI.
        src={`https://www.youtube.com/embed/${slide.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${slide.youtubeId}&controls=0&modestbranding=1&playsinline=1&rel=0`}
        title={`${slide.title} — background video`}
        allow="autoplay; encrypted-media; picture-in-picture"
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ transform: "scale(1.2)" }} // crops YouTube's letterbox edges
      />
    );
  }

  // ─── Uploaded file ───
  if (type === "file" && slide.videoUrl) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={slide.videoPoster}
        preload={isActive ? "auto" : "none"}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={slide.videoUrl} type="video/mp4" />
      </video>
    );
  }

  // ─── Fallback (no media) ───
  return <div className="absolute inset-0 bg-neutral-900" />;
}