import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageHero } from "@/components/PageBits";
import { img, services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - Parkland Real Estate" },
      {
        name: "description",
        content: "Verified homes, plots, commercial property, and investment advice in DHA Lahore.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Our Services"
        intro="From your first requirement to the final transfer, we help you move with clarity."
        image={img.luxuryVilla}
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="lit-panel grid overflow-hidden bg-card sm:grid-cols-[0.8fr_1.2fr]"
              >
                <img
                  src={service.image}
                  alt=""
                  className="h-full min-h-48 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6 sm:p-8">
                  <span className="text-xs font-bold text-primary">0{index + 1}</span>
                  <h2 className="mt-3 text-xl font-bold">{service.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary"
                  >
                    Discuss your requirement <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Tell us what you need"
        body="We will help you find the right property, phase, and path forward."
      />
    </>
  );
}
