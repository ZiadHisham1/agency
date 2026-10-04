// components/WorksSection.tsx
"use client";

import { useState } from "react";
import WorkCard from "@/components/ui/WorkCard";
import WorkPreviewModal from "@/components/sections/workPreviewModal";
import type { Work } from "@/lib/queries";

export default function WorksSection({ works }: { works: Work[] }) {
  const [active, setActive] = useState<Work | null>(null);

  if (!works?.length) return null;

  return (
    <section className="w-full bg-white py-10 sm:py-24 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-neutral-900
                       sm:text-4xl lg:text-5xl">
          Explore <span className="text-orange-500">Our Work</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {works.map((work) => (
            <WorkCard key={work._id} work={work} onOpen={setActive} />
          ))}
        </div>
      </div>

      <WorkPreviewModal work={active} onClose={() => setActive(null)} />
    </section>
  );
}