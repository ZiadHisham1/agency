// components/FaqSection.tsx
import FaqList from "@/components/ui/FaqList";
import type { Faq } from "@/lib/queries";

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  if (!faqs?.length) return null;

  return (
    <section className="w-full bg-neutral-50 py-10 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900
                         sm:text-4xl lg:text-5xl">
            Frequently Asked{" "}
            <span className="text-orange-500">Questions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-500 sm:text-lg">
            Everything you need to know before starting a project with us.
            Can't find an answer? Reach out and we'll get back within a day.
          </p>
        </div>

        {/* Accordion */}
        <FaqList faqs={faqs} />
      </div>
    </section>
  );
}