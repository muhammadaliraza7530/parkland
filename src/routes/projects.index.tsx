import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageBits";
import { img } from "@/lib/site-data";
import { projects } from "@/lib/site";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Properties - Parkland Real Estate" },
      {
        name: "description",
        content:
          "Find verified homes, plots, commercial buildings, and investment opportunities across DHA Lahore.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Verified opportunities"
        title="Find Your Next Property"
        intro="Every property on Parkland is physically verified by our team. Explore homes, plots, and commercial opportunities across DHA Lahore."
        image={img.modernVilla}
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                DHA Lahore
              </p>
              <h2 className="mt-3 text-3xl font-extrabold">Latest properties</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link to="/contact" className="text-primary underline">
                Tell us your budget and requirements.
              </Link>
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((property) => (
              <Link
                key={property.slug}
                to="/projects/$slug"
                params={{ slug: property.slug }}
                className="lit-panel group overflow-hidden bg-card"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    {property.category} · {property.status}
                  </span>
                  <h3 className="mt-2 text-xl font-bold">{property.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{property.location}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {property.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                    View details <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
