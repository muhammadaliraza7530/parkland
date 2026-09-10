import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageBits";
import { img, site } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Parkland Real Estate" },
      {
        name: "description",
        content:
          "Contact Parkland Real Estate for verified DHA Lahore property opportunities and advice.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const details = [
    { icon: MapPin, title: "Visit our office", body: site.address },
    { icon: Phone, title: "Call or WhatsApp", body: site.phone },
    { icon: Mail, title: "Email us", body: site.email },
  ];

  return (
    <>
      <PageHero
        eyebrow="Parkland Real Estate"
        title="Let's Talk Property"
        intro="Have questions about DHA Lahore? We are here to help."
        image={img.courtyard}
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="space-y-7">
            {details.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <Icon className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h2 className="font-bold">{title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-border pt-6">
              <p className="text-sm font-semibold">Office hours</p>
              <p className="mt-1 text-sm text-muted-foreground">Always open - 7 days a week</p>
            </div>
          </div>
          <form
            className="lit-panel grid gap-5 bg-card p-6 sm:grid-cols-2 sm:p-8"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.15em]">
              Name
              <input
                required
                name="name"
                className="rounded-md border border-border bg-background px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-primary"
              />
            </label>
            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.15em]">
              Phone
              <input
                required
                name="phone"
                type="tel"
                className="rounded-md border border-border bg-background px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-primary"
              />
            </label>
            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.15em] sm:col-span-2">
              Email
              <input
                name="email"
                type="email"
                className="rounded-md border border-border bg-background px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-primary"
              />
            </label>
            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.15em] sm:col-span-2">
              Message
              <textarea
                required
                name="message"
                rows={5}
                className="resize-y rounded-md border border-border bg-background px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-primary"
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-accent sm:col-span-2"
            >
              Submit enquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
