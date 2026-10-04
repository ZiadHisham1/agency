// components/WorldClock.tsx
"use client";

import { useEffect, useState } from "react";

export default function WorldClock({
  city,
  timezone,
}: {
  city: string;
  timezone: string;
}) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: timezone,
      hour12: false,
    });

    const tick = () => setTime(fmt.format(new Date()));
    tick();

    const id = setInterval(tick, 30_000); // refresh every 30s
    return () => clearInterval(id);
  }, [timezone]);

  return (
    <div className="flex items-center gap-2 text-sm text-neutral-300">
      <span className="inline-flex h-2 w-2 rounded-full bg-orange-400" />
      <span className="text-neutral-400">{city}</span>
      <span className="font-mono text-white">
        {time || "--:--"}
      </span>
    </div>
  );
}