// components/HeroSlider.tsx
"use client";

import { useEffect, useState, useCallback } from "react";
import Button from "@/components/ui/Button";
import ArrowButton from "@/components/ui/ArrowButton";
import HeroSlideMedia from "@/components/ui/HeroSlideMedia";
import type { HeroSlide } from "@/lib/queries";

const AUTOPLAY_MS = 6000;

export default function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);

  if (!slides?.length) return null;

  const goTo = useCallback(
    (i: number) => setIndex(((i % slides.length) + slides.length) % slides.length),
    [slides.length]
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Autoplay
  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [next]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const active = slides[index];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Media layers — one per slide, cross-faded */}
      {slides.map((slide, i) => {
        const isActive = slide === active;
        return (
          <div
            key={slide._id}
            className={`absolute inset-0 transition-opacity duration-700 ease-out
                        ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            aria-hidden={!isActive}
          >
            <HeroSlideMedia slide={slide} isActive={isActive} />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        );
      })}

      {/* Content — one wrapper for the active slide's text */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
          <div key={active._id} className="max-w-2xl">
            {active.subtitle && (
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-orange-400">
                {active.subtitle}
              </p>
            )}
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {active.title}
            </h1>
            {active.description && (
              <p className="mt-6 text-base text-white/85 sm:text-lg lg:text-xl">
                {active.description}
              </p>
            )}
            {active.ctaLabel && (
              <div className="mt-8">
                <Button variant="outline" size="lg">
                  {active.ctaLabel}
                </Button>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="mt-12 flex items-center gap-4">
            <ArrowButton direction="prev" onClick={prev} />
            <ArrowButton direction="next" onClick={next} />

            <div className="ml-4 flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all
                              ${i === index ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}