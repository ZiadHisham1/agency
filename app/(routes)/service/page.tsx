// app/services/page.tsx
import Link from "next/link";
import Image from "next/image";
import { getServices } from "@/lib/queries";
import Navbar from "@/components/sections/navBar";
import Footer from "@/components/sections/footer"; // if you have one
// import { getFooter } from "@/lib/queries";

export const revalidate = 60;

export default async function ServicesIndex() {
  const services = await getServices();

  return (
    <>
      <Navbar />
      <main className="pt-10 pb-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
              Services
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
              What We <span className="text-orange-500">Build</span>
            </h1>
            <p className="mt-4 text-lg text-neutral-500">
              Choose the service that matches your project — or talk to us and we'll recommend the right fit.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s._id}
                href={`/service/${s.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-neutral-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                {s.heroImage && (
                  <div className="relative aspect-[16/10] w-full bg-neutral-100">
                    <Image
                      src={s.heroImage}
                      alt={s.heroImageAlt ?? s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  {s.eyebrow && (
                    <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
                      {s.eyebrow}
                    </p>
                  )}
                  <h2 className="mt-2 text-xl font-bold text-neutral-900">{s.title}</h2>
                  {s.tagline && (
                    <p className="mt-2 text-sm text-neutral-500 line-clamp-2">{s.tagline}</p>
                  )}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-500 group-hover:gap-2 transition-all">
                    Learn more <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}