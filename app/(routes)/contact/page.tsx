// app/(routes)/contact/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/sections/navBar";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — PowerGate Software",
  description: "Any question or remarks? Just write us a message!",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-neutral-950 pt-32 pb-24">
        {/* Gradient blob backdrop */}
        <BlurBackdrop />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
          {/* Heading */}
          <div className="text-center text-white">
            <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80 sm:text-xl">
              Any question or remarks? Just write us a message!
            </p>
          </div>

          {/* Glass card */}
          <div className="relative mt-16">
            <div
              className="
                relative overflow-hidden rounded-3xl
                backdrop-blur-xl
                bg-white/[0.06]
                ring-1 ring-white/10
                shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9),0_0_80px_-20px_rgba(120,80,255,0.15)]
              "
            >
              {/* Top edge highlight line */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px
                           bg-gradient-to-r from-transparent via-white/60 to-transparent"
              />

              {/* Top sheen — soft refraction glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-24
                           bg-gradient-to-b from-white/[0.08] to-transparent"
              />

              {/* Bottom inner shadow — thickness */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24
                           bg-gradient-to-t from-black/30 to-transparent"
              />

              {/* All-around inset darkening — glass density */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl
                           shadow-[inset_0_0_40px_-15px_rgba(0,0,0,0.6)]"
              />

              {/* Content grid — info sidebar + form */}
              <div className="relative grid lg:grid-cols-[360px_1fr]">
                <ContactInfo />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

/* ─── Blurred gradient blobs ─── */
function BlurBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute left-[8%] top-[18%] h-64 w-64 rounded-full bg-orange-500 opacity-40 blur-3xl" />
      <div className="absolute left-[12%] top-[22%] h-56 w-56 rounded-full bg-pink-500 opacity-30 blur-3xl" />

      <div className="absolute right-[10%] top-[6%] h-72 w-72 rounded-full bg-cyan-400 opacity-40 blur-3xl" />
      <div className="absolute right-[6%] top-[14%] h-80 w-80 rounded-full bg-orange-500 opacity-30 blur-3xl" />

      <div className="absolute bottom-[8%] left-[6%] h-80 w-80 rounded-full bg-cyan-400 opacity-35 blur-3xl" />
      <div className="absolute bottom-[4%] left-[14%] h-64 w-64 rounded-full bg-orange-500 opacity-30 blur-3xl" />

      <div className="absolute bottom-[18%] left-[38%] h-52 w-52 rounded-full bg-orange-600 opacity-40 blur-3xl" />

      <div className="absolute bottom-[6%] right-[16%] h-56 w-56 rounded-full bg-purple-500 opacity-40 blur-3xl" />
      <div className="absolute bottom-[12%] right-[20%] h-40 w-40 rounded-full bg-fuchsia-500 opacity-30 blur-3xl" />
    </div>
  );
}

/* ─── Left column — contact information ─── */
function ContactInfo() {
  return (
    <aside
      className="relative flex flex-col justify-between gap-10
                 bg-white/[0.02] p-8 sm:p-10
                 border-b border-white/10 lg:border-b-0 lg:border-r"
    >
      {/* Blurred accent inside the sidebar */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-4 top-2 h-40 w-40 rounded-full bg-pink-500 opacity-25 blur-3xl" />
        <div className="absolute bottom-16 left-2 h-56 w-56 rounded-full bg-blue-500 opacity-25 blur-3xl" />
        <div className="absolute bottom-4 right-6 h-32 w-32 rounded-full bg-cyan-400 opacity-20 blur-3xl" />
      </div>

      <div className="relative">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Contact Information
        </h2>

        <ul className="mt-14 space-y-8 text-white/90">
          <li className="flex items-center gap-4">
            <MailIcon />
            <a
              href="mailto:zziadhisham947@gmail.com"
              className="text-sm hover:text-white sm:text-base"
            >
              zziadhisham947@gmail.com
            </a>
          </li>
          <li className="flex items-start gap-4">
            <PinIcon />
            <span className="text-sm leading-relaxed sm:text-base">
              6A Floor, C Tower, Central Point, 219 Trung Kinh St,
              Cau Giay Dist., Cairo, Egypt.
            </span>
          </li>
        </ul>
      </div>

      {/* Social icons */}
      <div className="relative flex items-center gap-4">
        <SocialIcon name="twitter" href="#" />
        <SocialIcon name="instagram" href="#" />
        <SocialIcon name="linkedin" href="#" />
      </div>
    </aside>
  );
}

/* ─── Icons ─── */
function MailIcon() {
  return (
    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-white">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    </span>
  );
}

function PinIcon() {
  return (
    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-white">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
      </svg>
    </span>
  );
}

function SocialIcon({
  name,
  href,
}: {
  name: "twitter" | "instagram" | "linkedin";
  href: string;
}) {
  const paths = {
    twitter:
      "M18.9 2H22l-7.5 8.6L22.6 22h-6.7l-5-6.6L5 22H2l8-9.2L1.7 2h6.9l4.6 6.1L18.9 2zm-1.2 18h1.7L7 3.9H5.2L17.7 20z",
    instagram:
      "M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.4 2.2 8.8 2.2 12 2.2zm0 3.3A6.5 6.5 0 105.5 12 6.5 6.5 0 0012 5.5zm0 10.7A4.2 4.2 0 1116.2 12 4.2 4.2 0 0112 16.2zm6.7-10.9a1.5 1.5 0 11-1.5-1.5 1.5 1.5 0 011.5 1.5z",
    linkedin:
      "M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V21H18V15.6c0-1.3-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H10V9z",
  };
  const colors = {
    twitter: "text-[#1DA1F2]",
    instagram: "text-[#E4405F]",
    linkedin: "text-[#0A66C2]",
  };
  return (
    <a
      href={href}
      aria-label={name}
      className={`transition hover:opacity-80 ${colors[name]}`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d={paths[name]} />
      </svg>
    </a>
  );
}