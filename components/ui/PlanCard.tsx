// components/PlanCard.tsx
import Button from "@/components/ui/Button";
import type { Plan } from "@/data/plans";

export default function PlanCard({ plan }: { plan: Plan }) {
  const { featured, badge } = plan;

  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300
                  ${featured
                    ? "border-orange-400 bg-neutral-900 text-white shadow-2xl lg:-translate-y-2 lg:scale-[1.02]"
                    : "border-neutral-200 bg-white text-neutral-900 hover:border-orange-300 hover:shadow-lg"}`}
    >
      {/* Badge */}
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full
                         bg-orange-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-black">
          {badge}
        </span>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className={`text-2xl font-extrabold ${featured ? "text-white" : "text-neutral-900"}`}>
          {plan.name}
        </h3>
        <p className={`mt-1 text-sm ${featured ? "text-white/70" : "text-neutral-500"}`}>
          {plan.tagline}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6 flex items-end gap-1">
        <span className="text-xl font-bold text-orange-400">{plan.currency}</span>
        <span className="text-5xl font-extrabold text-orange-400 leading-none">
          {plan.price.toLocaleString()}
        </span>
        <span className={`mb-1 ml-1 text-sm ${featured ? "text-white/60" : "text-neutral-500"}`}>
          / {plan.period}
        </span>
      </div>

      {/* Divider */}
      <div className={`mb-6 border-t ${featured ? "border-white/10" : "border-neutral-200"}`} />

      {/* Features */}
      <ul className="mb-8 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <svg
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className={featured ? "text-white/85" : "text-neutral-700"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant={featured ? "solid" : "outline"}
        size="lg"
        className={`w-full ${!featured ? "!border-neutral-300 !text-neutral-900 hover:!bg-neutral-900 hover:!text-white" : ""}`}
        onClick={() => { window.location.href = plan.ctaHref; }}
      >
        {plan.ctaLabel}
      </Button>
    </div>
  );
}