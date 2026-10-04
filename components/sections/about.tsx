// components/AboutSection.tsx
import Image from "next/image";
import type { About } from "@/lib/queries";
import Button from "@/components/ui/Button";

export default function AboutSection({ about }: { about: About | null }) {
  if (!about) return null;

  const {
    eyebrow,
    heading,
    headingAccent,
    intro,
    bodyLeft,
    bodyRight,
    image,
    imageAlt,
    stats,
    ctaLabel,
    ctaHref,
  } = about;

  return (
    <section className="relative w-full bg-white py-10 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Heading block */}
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900
                         sm:text-4xl lg:text-5xl">
            {heading}
            {headingAccent && (
              <>
                {" "}
                <span className="text-orange-500">{headingAccent}</span>
              </>
            )}
          </h2>
          {intro && (
            <p className="mt-5 text-base text-neutral-600 sm:text-lg">
              {intro}
            </p>
          )}
        </div>

        {/* Two-column area with optional image */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image column */}
          {image && (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl
                            bg-neutral-100 shadow-xl ring-1 ring-neutral-200">
              <Image
                src={image}
                alt={imageAlt ?? heading}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          )}

          {/* Text column */}
          <div className={image ? "" : "lg:col-span-2"}>
            {(bodyLeft || bodyRight) && (
              <div className={`grid gap-6 ${bodyLeft && bodyRight ? "sm:grid-cols-2" : ""}`}>
                {bodyLeft && (
                  <p className="text-base leading-relaxed text-neutral-700">
                    {bodyLeft}
                  </p>
                )}
                {bodyRight && (
                  <p className="text-base leading-relaxed text-neutral-700">
                    {bodyRight}
                  </p>
                )}
              </div>
            )}

            {/* Stats row */}
            {stats && stats.length > 0 && (
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-3">
                {stats.map((s, i) => (
                  <div key={`${s.label}-${i}`}>
                    <p className="text-3xl font-extrabold text-orange-500 sm:text-4xl">
                      {s.value}
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">{s.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            {ctaLabel && (
              <div className="mt-8">
                <a href={ctaHref ?? "#"}>
                  <Button variant="outline" size="lg" className="!border-neutral-900 !text-neutral-900 hover:!bg-neutral-900 hover:!text-white">
                    {ctaLabel}
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}