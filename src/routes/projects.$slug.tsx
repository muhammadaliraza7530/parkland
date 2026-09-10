import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/projects/$slug")({
  head: () => ({
    meta: [
      { title: "Project — Parkland Real Estate Group" },
      { name: "description", content: "Parkland Real Estate Group project details are coming soon." },
      { property: "og:title", content: "Project — Parkland Real Estate Group" },
      { property: "og:description", content: "Parkland Real Estate Group project details are coming soon." },
    ],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  return <ComingSoon section="Project details" />;
}
