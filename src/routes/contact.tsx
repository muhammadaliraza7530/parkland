import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Parkland Real Estate Group" },
      {
        name: "description",
        content:
          "The Parkland Real Estate Group contact page is coming soon.",
      },
      { property: "og:title", content: "Contact — Parkland Real Estate Group" },
      {
        property: "og:description",
        content: "The Parkland Real Estate Group contact page is coming soon.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <ComingSoon section="Contact" />;
}
