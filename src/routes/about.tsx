import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Parkland Real Estate Group" },
      {
        name: "description",
        content:
          "The Parkland Real Estate Group about page is coming soon.",
      },
      { property: "og:title", content: "About — Parkland Real Estate Group" },
      {
        property: "og:description",
        content: "The Parkland Real Estate Group about page is coming soon.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return <ComingSoon section="About" />;
}
