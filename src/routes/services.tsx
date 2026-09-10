import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Parkland Real Estate Group" },
      {
        name: "description",
        content:
          "Parkland Real Estate Group services are coming soon.",
      },
      { property: "og:title", content: "Services — Parkland Real Estate Group" },
      {
        property: "og:description",
        content: "Parkland Real Estate Group services are coming soon.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return <ComingSoon section="Services" />;
}
