// components/PlansSection.tsx
"use client";
import { plans } from "@/data/plans";
import PlanCard from "@/components/ui/PlanCard";

export default function PlansSection() {
  return (
    <section className="w-full bg-neutral-50 py-10 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900
                         sm:text-4xl lg:text-5xl">
            Plans That Fit Your Stage
          </h2>
          <p className="mt-4 text-base text-neutral-500 sm:text-lg">
            Whether you're validating an idea or scaling a product, we have a plan shaped for where you are.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-10 text-center text-sm text-neutral-500">
          Need something custom?{" "}
          <a href="#contact" className="font-semibold text-orange-500 hover:underline">
            Let's talk
          </a>
        </p>
      </div>
    </section>
  );
}