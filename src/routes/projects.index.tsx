import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Parkland Real Estate Group" },
      {
        name: "description",
        content:
          "Parkland Real Estate Group properties and projects are coming soon.",
      },
      { property: "og:title", content: "Projects — Parkland Real Estate Group" },
      {
        property: "og:description",
        content: "Parkland Real Estate Group properties and projects are coming soon.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return <ComingSoon section="Projects" />;
}
