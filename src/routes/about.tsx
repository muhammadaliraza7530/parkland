import { createFileRoute } from "@tanstack/react-router";
import { Check, Eye, Target, Users } from "lucide-react";
import { CtaBand, PageHero, Prose } from "@/components/PageBits";
import { img, site } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Parkland Real Estate" },
      {
        name: "description",
        content:
          "Meet Parkland Real Estate, your DHA Lahore specialists for smart property decisions.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const highlights = [
    {
      icon: Eye,
      title: "Our vision",
      body: "To be Lahore's most trusted real estate brand for luxury living and smart investments.",
    },
    {
      icon: Target,
      title: "Our mission",
      body: "To deliver verified, profitable, and hassle-free real estate deals.",
    },
    {
      icon: Users,
      title: "Our numbers",
      body: "6K+ followers, 100% recommended, 100+ happy clients, and 1 on-ground office.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="About Parkland"
        title="Smart Deals. Real Returns."
        intro="Parkland Real Estate was established to bring transparency and trust to the DHA Lahore property market."
        image={img.courtyard}
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Who we are
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Local knowledge. Clear advice.
            </h2>
            <Prose>
              <p>
                We are a team of DHA specialists based in Sector L, Phase-6. We understand pricing,
                demand, and future development in every phase of DHA Lahore.
              </p>
              <p>
                Located at {site.address}, our on-ground team gives you direct access to the best
                inventory in DHA Lahore.
              </p>
            </Prose>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map(({ icon: Icon, title, body }) => (
              <div key={title} className="lit-panel bg-card p-6">
                <Icon className="size-5 text-primary" />
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-card/30 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
            Our values
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              "Integrity: Honest advice, always",
              "Transparency: Clear pricing, verified documents",
              "Results: Properties that appreciate and homes that last",
            ].map((value) => (
              <div key={value} className="flex gap-3 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Ready to invest smarter?"
        body="Talk to our DHA Lahore team about your next property move."
      />
    </>
  );
}
