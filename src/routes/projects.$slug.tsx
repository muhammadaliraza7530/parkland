import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { CtaBand } from "@/components/PageBits";
import { projects } from "@/lib/site";
import { site } from "@/lib/site-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const property = projects.find((item) => item.slug === params.slug);
    if (!property) throw notFound();
    return { property };
  },
  head: () => ({
    meta: [
      { title: "Property - Parkland Real Estate" },
      { name: "description", content: "Verified property opportunity in DHA Lahore." },
    ],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { property } = Route.useLoaderData();

  return (
    <>
      <section className="relative min-h-[72vh] overflow-hidden pt-24">
        <img
          src={property.image}
          alt={property.title}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-black/45" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-6xl items-end px-5 pb-16 lg:px-8">
          <div className="max-w-3xl">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary"
            >
              <ArrowLeft className="size-4" /> All properties
            </Link>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {property.category} · {property.status}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-6xl">{property.title}</h1>
            <p className="mt-3 text-base text-gray-300">{property.location}</p>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Property overview
            </p>
            <h2 className="mt-4 text-3xl font-extrabold">A verified opportunity in DHA Lahore</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {property.blurb} Every opportunity is reviewed by our local team so you can move
              forward with clear information and trusted support.
            </p>
          </div>
          <div className="lit-panel bg-card p-7">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Interested in this property or looking for something similar?
            </p>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground"
            >
              <Phone className="size-4" /> Call {site.phone}
            </a>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary"
            >
              Send your requirements <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
      <CtaBand
        title="Looking for a different property?"
        body="Tell us your budget and requirements and our DHA Lahore team will prepare verified options."
      />
    </>
  );
}
