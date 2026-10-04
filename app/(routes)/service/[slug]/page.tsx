// app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getServiceBySlug, getServices } from "@/lib/queries";
import Navbar from "@/components/sections/navBar";
import Button from "@/components/ui/Button";
import ServiceHeroMedia from "@/components/ui/ServiceHeroSection";
import { PortableText } from "@portabletext/react";

export const revalidate = 60;

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: String(s.slug) }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) return notFound();

  return (
    <>
      <Navbar />

      <main className="bg-black/95 text-white">
        {/* ─── Hero with video/image ─── */}
        <section className="relative flex min-h-[80vh] w-full items-center justify-center
                            overflow-hidden bg-neutral-900 pt-24 pb-20 sm:pt-32 sm:pb-28">
          {/* Media layer (image / youtube / video) */}
          <ServiceHeroMedia service={service} />

          {/* Dark overlay — keeps text readable on top of any media */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/85" />

          {/* Hero content */}
          <div className="relative mx-auto max-w-4xl px-6 text-center text-white sm:px-10">
            {service.eyebrow && (
              <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
                {service.eyebrow}
              </p>
            )}
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            {service.tagline && (
              <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85 sm:text-xl">
                {service.tagline}
              </p>
            )}
            {service.ctaLabel && (
              <div className="mt-8 flex justify-center">
                <Link href="/contact">
                  <Button variant="solid" size="lg">
                    {service.ctaLabel}
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Intro + body */}
        <section className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
          {service.intro && (
            <p className="text-xl font-medium leading-relaxed text-white text-neutral-800">
              {service.intro}
            </p>
          )}
          {service.body && (
            <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-bold prose-a:text-orange-500">
              <PortableText value={service.body} />
            </div>
          )}
        </section>

        {/* Features */}
        {service.features && service.features.length > 0 && (
          <section className="bg-[#000000] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
              <h2 className="text-center text-3xl font-extrabold tracking-tight text-white-900 sm:text-4xl">
                What's <span className="text-orange-500">Included</span>
              </h2>
              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {service.features.map((f, i) => (
                  <div key={i} className="rounded-2xl bg-[#92929233] p-6 shadow-sm ring-1 ring-neutral-100">
                    <h3 className="text-lg font-bold text-center text-white-900">{f.title}</h3>
                    {f.description && (
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {f.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-white-900 sm:text-4xl">
              Ready to start?
            </h2>
            <p className="mt-4 text-lg text-neutral-500">
              Tell us about your project and we'll get back within one business day.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/contact">
                <Button variant="solid" size="lg">
                  {service.ctaLabel ?? "Contact us"}
                </Button>
              </Link>
              <Link href="/service">
                <Button variant="outline" size="lg" className="!border-white-900 !text-white-900 hover:!bg-neutral-900 hover:!text-white">
                  All services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}