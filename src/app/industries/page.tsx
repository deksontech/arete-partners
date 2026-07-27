import type { Metadata } from "next";
import { PageRenderer } from "@/components/PageRenderer";
import { industries } from "@/content/live/industries";

export const metadata: Metadata = {
  title: industries.title,
  description: industries.description,
  alternates: { canonical: industries.route },
};

export default function IndustriesPage() {
  return <PageRenderer page={industries} />;
}
