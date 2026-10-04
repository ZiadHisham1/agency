// components/WorldMapSection.tsx
"use client";

import Image from "next/image";

export default function WorldMapSection() {
  return (
    <section className="relative w-full bg-white py-10 sm:py-24 lg:py-10 lg:pt-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900
                         sm:text-4xl lg:text-5xl">
            A Global AI-Powered Software Studio
          </h2>
          <p className="mt-3 text-xl font-bold italic text-orange-400
                        sm:text-2xl lg:text-3xl">
            Bringing Innovative Ideas to Life!
          </p>
        </div>

        {/* Map */}
        <div className="relative mt-12 sm:mt-16">
          <Image
            src="/world-map-dots.png"
            alt="Dotted world map"
            width={1600}
            height={900}
            className="mx-auto h-auto w-full max-w-6xl select-none"
            priority
          />

          {/* Pin wrapper — positioned as a % of the map's bounding box */}
          <div
            className="absolute"
            style={{
              // Egypt sits roughly at 30°N, 31°E on a standard equirectangular map
              // (roughly 55% from left, 40% from top of the map image itself)
              top: "53%",
              left: "50.2%",
              transform: "translate(-50%, -100%)",
            }}
          >
            <Pin />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pin() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Ping pulse */}
      <span className="absolute bottom-0 h-6 w-6 animate-ping rounded-full bg-red-500/60" />

      {/* Pin SVG */}
      <svg
        width="52"
        height="68"
        viewBox="0 0 24 32"
        fill="none"
        className="relative drop-shadow-[0_4px_10px_rgba(220,38,38,0.45)]"
      >
        <path
          d="M12 0C5.373 0 0 5.373 0 12c0 8.5 12 20 12 20s12-11.5 12-20C24 5.373 18.627 0 12 0z"
          fill="#e11d2e"
        />
        <circle cx="12" cy="12" r="4.5" fill="#111" />
      </svg>
    </div>
  );
}