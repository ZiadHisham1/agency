// components/TestimonialsSection.tsx
import Image from "next/image";
import TestimonialCard from "@/components/ui/TestimonialCard";
import type { Testimonial } from "@/lib/queries";

export default function TestimonialsSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  if (!testimonials?.length) return null;

  return (
    <section className="relative w-full overflow-hidden bg-neutral-50 py-10 sm:py-24 lg:py-28">
      {/* Faded dotted map background */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/world-map-dots.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/70 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight
                         text-neutral-900 sm:text-4xl lg:text-5xl">
            <span className="block text-orange-500">What Our Clients Said</span>
            <span className="mt-2 block">About The Quality of Our Work</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t._id} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}