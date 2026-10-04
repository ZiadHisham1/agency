// components/StatsSection.tsx
"use client";

// components/StatsSection.tsx
import type { Stat } from "@/lib/queries";


// const stats: Stat[] = [
//   { value: 250, suffix: "+", label: "Top Tech Specialists" },
//   { value: 10,  suffix: "+", label: "Average Project Team" },
//   { value: 200, suffix: "+", label: "Successful Projects" },
//   { value: 180, suffix: "+", label: "Clients Served Globally" },
//   { value: 96,  suffix: "%", label: "Satisfaction Rate" },
// ];

export default function StatsSection({ stats }: { stats: Stat[] }) {
  if (!stats?.length) return null;

  return (
    <section className="w-full bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="border-t border-neutral-200" />

        <ul
          className="grid grid-cols-2 gap-y-8 py-8
                     sm:grid-cols-3 lg:grid-cols-5
                     divide-neutral-200 sm:divide-x"
        >
          {stats.map((stat) => (
            <li
              key={stat._id}
              className="flex flex-col items-center justify-center px-4 text-center"
            >
              <div className="flex items-baseline text-3xl font-extrabold text-orange-500 sm:text-4xl">
                <span>{stat.value}</span>
                {stat.suffix && (
                  <span className="ml-1.5 text-2xl sm:text-3xl">{stat.suffix}</span>
                )}
              </div>
              <p className="mt-2 text-sm text-neutral-500 sm:text-base">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>

        <div className="border-b border-neutral-200" />
      </div>
    </section>
  );
}