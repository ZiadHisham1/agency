// components/TeamSection.tsx
import Image from "next/image";
import TeamCard from "@/components/ui/TeamCard";
import type { TeamMember } from "@/lib/queries";

export default function TeamSection({ team }: { team: TeamMember[] }) {
  if (!team?.length) return null;

  return (
    <section className="relative w-full overflow-hidden bg-neutral-50 py-10 sm:py-24 lg:py-10">
      {/* Electronic background */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/electronic-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-neutral-900
                       sm:text-4xl lg:text-5xl">
          Our <span className="text-orange-500">Management Team</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member._id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}