import type { Metadata } from "next";
import { PageRenderer } from "@/components/PageRenderer";
import { team } from "@/content/live/team";

export const metadata: Metadata = {
  title: team.title,
  description: team.description,
  alternates: { canonical: team.route },
};

export default function TeamPage() {
  return <PageRenderer page={team} />;
}
