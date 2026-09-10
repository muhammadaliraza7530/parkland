import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import logoAsset from "@/assets/parkland-logo.webp.asset.json";

export function ComingSoon({ section }: { section: string }) {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden px-5 pb-20 pt-32 lg:pt-36">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60" />
      <div className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="relative mx-auto w-full max-w-3xl text-center">
        <img
          src={logoAsset.url}
          alt="Parkland Real Estate Group"
          className="mx-auto w-full max-w-[280px] object-contain sm:max-w-[360px]"
        />
        <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.32em] text-primary sm:text-xs">
          {section}
        </p>
        <h1 className="mt-4 text-4xl font-extrabold uppercase leading-none sm:text-6xl lg:text-7xl">
          Coming Soon
        </h1>
        <div className="mx-auto mt-7 h-px w-24 bg-primary" />
        <p className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          We are preparing this space with exceptional properties and thoughtful real estate opportunities.
        </p>
        <Link
          to="/"
          className="sheen-on-hover mt-10 inline-flex items-center gap-2 rounded-full border border-primary/60 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowLeft className="size-4" /> Back to home
        </Link>
      </div>
    </section>
  );
}