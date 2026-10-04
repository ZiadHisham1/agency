// components/TestimonialCard.tsx
import Image from "next/image";
import type { Testimonial } from "@/lib/queries";

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article
      className="flex h-full flex-col rounded-2xl bg-white p-7
                 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)]
                 ring-1 ring-neutral-100 transition-all duration-300
                 hover:-translate-y-1 hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.2)]"
    >
      {/* Company logo */}
      <div className="mb-6 flex items-center gap-2.5">
        {t.companyLogo ? (
          <Image
            src={t.companyLogo}
            alt={t.company}
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
        ) : (
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500
                          text-sm font-bold text-white">
            {t.company.charAt(0).toUpperCase()}
          </div>
        )}
        <span className="text-lg font-bold text-orange-500">{t.company}</span>
      </div>

      {/* Quote title */}
      <h3 className="mb-4 text-xl font-bold leading-snug text-neutral-900 line-clamp-3">
        {t.quoteTitle}
      </h3>

      {/* Quote body */}
      <p className="mb-8 flex-1 text-sm leading-relaxed text-neutral-500 line-clamp-5 sm:text-base">
        {t.quoteBody}
      </p>

      {/* Author */}
      <div className="mt-auto flex items-center gap-3">
        {t.avatar ? (
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-neutral-200">
            <Image
              src={t.avatar}
              alt={t.authorName}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full
                          bg-neutral-200 text-base font-semibold text-neutral-600">
            {t.authorName.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="min-w-0">
          <p className="truncate text-base font-semibold text-neutral-900">
            {t.authorName}
          </p>
          <p className="truncate text-sm text-neutral-500">{t.authorRole}</p>
        </div>
      </div>
    </article>
  );
}