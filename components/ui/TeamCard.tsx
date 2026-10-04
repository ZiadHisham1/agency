// components/TeamCard.tsx
import Image from "next/image";
import type { TeamMember } from "@/lib/queries";

export default function TeamCard({ member }: { member: TeamMember }) {
  const Wrapper = member.href ? "a" : "div";
  const wrapperProps = member.href
    ? { href: member.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className="group relative flex flex-col rounded-3xl bg-white p-4 shadow-md ring-1 ring-neutral-100
                 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Portrait */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-200">
        <Image
          src={member.image}
          alt={member.imageAlt ?? member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Info row */}
      <div className="mt-4 flex items-start justify-between gap-3 px-1">
        <div className="min-w-0">
          <h3 className="truncate text-lg font-bold text-neutral-900 sm:text-xl">
            {member.name}
          </h3>
          <p className="mt-1 text-base font-medium text-neutral-900 sm:text-lg">
            {member.role}
          </p>
        </div>

        {member.href && (
          <span
            aria-hidden="true"
            className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center text-neutral-900
                       transition-transform duration-300 group-hover:translate-x-0.5
                       group-hover:-translate-y-0.5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2.2"
                 strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </span>
        )}
      </div>
    </Wrapper>
  );
}