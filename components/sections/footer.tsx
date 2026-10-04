// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { footer } from "@/data/footer";
import WorldClock from "@/components/ui/WorldClock";

export default function Footer() {
  const { brand, socials, columns, awards, offices, clocks, legal } = footer;

  return (
    <footer className="w-full bg-neutral-950 text-neutral-300">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand block */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              {brand.logo && (
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              )}
              <div className="leading-none">
                <div className="text-2xl font-extrabold text-white">
                  {brand.name}
                </div>
                <div className="mt-1 text-xs font-semibold tracking-[0.3em] text-neutral-400">
                  {brand.tagline}
                </div>
              </div>

              {/* Socials */}
              <div className="ml-3 flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="flex h-9 w-9 items-center justify-center border border-white/25
                               text-white/80 transition hover:border-orange-400 hover:text-orange-400"
                  >
                    <SocialIcon name={s.name} />
                  </a>
                ))}
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-400">
              {brand.blurb}
            </p>
            <p className="mt-4 text-sm text-neutral-400">
              Please contact us at:{" "}
              <a
                href={`mailto:${brand.contactEmail}`}
                className="text-orange-400 hover:underline"
              >
                {brand.contactEmail}
              </a>
            </p>

            {/* Awards */}
            {awards.length > 0 && (
              <div className="mt-10">
                <h3 className="text-lg font-bold text-white">Our Awards</h3>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  {awards.map((a, i) => (
                    <Image
                      key={`${a.name}-${i}`}
                      src={a.image}
                      alt={a.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 object-contain opacity-90 transition hover:opacity-100"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 inline-block border-b border-white/15 pb-1.5 text-base
                               font-semibold text-white">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-neutral-300 transition hover:text-orange-400"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Offices + clocks */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {offices.map((o) => (
            <OfficeBlock key={o.country} office={o} />
          ))}

          {/* World clocks */}
          {clocks.length > 0 && (
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-orange-400">
                <PinIcon />
                World Clocks
              </h3>
              <ul className="space-y-2">
                {clocks.map((c) => (
                  <li key={c.city}>
                    <WorldClock city={c.city} timezone={c.timezone} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4
                      px-6 py-6 sm:flex-row sm:px-10 lg:px-16">
        <div className="flex items-center gap-3 text-xs text-neutral-400">
          <a
            href={legal.dmcaHref}
            className="rounded border border-green-600/40 bg-green-900/30 px-2 py-0.5
                       text-green-400"
          >
            DMCA PROTECTED
          </a>
          <span>{legal.copyright}</span>
        </div>

        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-neutral-400">
          {legal.links.map((l) => (
            <li key={l.label} className="flex items-center gap-4">
              <Link href={l.href} className="hover:text-orange-400">
                {l.label}
              </Link>
              <span className="text-neutral-700">|</span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

/* ---------- Sub-components ---------- */

function OfficeBlock({ office }: { office: import("@/data/footer").Office }) {
  return (
    <div>
      <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-orange-400">
        <PinIcon />
        In {office.country}
      </h3>

      {office.addressLines.map((line, i) => (
        <p key={i} className="text-sm leading-relaxed text-neutral-300">
          {i === 0 && <span className="text-neutral-400">Address : </span>}
          {line}
        </p>
      ))}

      {office.phones.length > 0 && (
        <div className="mt-3 text-sm text-neutral-300">
          <span className="text-neutral-400">Tel : </span>
          {office.phones.map((p, i) => (
            <span key={p}>
              {i > 0 && " / "}
              <a href={`tel:${p.replace(/[^+\d]/g, "")}`} className="hover:text-orange-400">
                {p}
              </a>
            </span>
          ))}
        </div>
      )}

      {office.emails.length > 0 && (
        <div className="mt-2 text-sm text-neutral-300">
          <span className="text-neutral-400">Email : </span>
          {office.emails.map((e, i) => (
            <span key={e}>
              {i > 0 && " / "}
              <a href={`mailto:${e}`} className="text-orange-400 hover:underline">
                {e}
              </a>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
    </svg>
  );
}

function SocialIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    facebook:
      "M13 22v-8h3l.5-4H13V8c0-1.1.3-1.8 1.9-1.8H17V2.4C16.6 2.4 15.4 2.3 14 2.3 10.8 2.3 8.7 4.2 8.7 7.6V10H6v4h2.7v8h4.3z",
    linkedin:
      "M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V21H18V15.6c0-1.3-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H10V9z",
    twitter:
      "M18.9 2H22l-7.5 8.6L22.6 22h-6.7l-5-6.6L5 22H2l8-9.2L1.7 2h6.9l4.6 6.1L18.9 2zm-1.2 18h1.7L7 3.9H5.2L17.7 20z",
    instagram:
      "M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.4 2.2 8.8 2.2 12 2.2zm0 3.3A6.5 6.5 0 105.5 12 6.5 6.5 0 0012 5.5zm0 10.7A4.2 4.2 0 1116.2 12 4.2 4.2 0 0112 16.2zm6.7-10.9a1.5 1.5 0 11-1.5-1.5 1.5 1.5 0 011.5 1.5z",
    youtube:
      "M23 12s0-3.4-.44-5.03a2.6 2.6 0 00-1.83-1.84C19.1 4.7 12 4.7 12 4.7s-7.1 0-8.73.44A2.6 2.6 0 001.44 6.97C1 8.6 1 12 1 12s0 3.4.44 5.03a2.6 2.6 0 001.83 1.84c1.63.43 8.73.43 8.73.43s7.1 0 8.73-.44a2.6 2.6 0 001.83-1.83C23 15.4 23 12 23 12zM9.75 15.5v-7L16 12l-6.25 3.5z",
  };
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d={paths[name] ?? paths.facebook} />
    </svg>
  );
}