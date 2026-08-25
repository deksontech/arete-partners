import type { Metadata } from "next";
import { AboutPage as AboutPageContent } from "@/components/AboutPage";
import { about } from "@/content/live/about";

export const metadata: Metadata = {
  title: about.title,
  description: about.description,
  alternates: { canonical: about.route },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
