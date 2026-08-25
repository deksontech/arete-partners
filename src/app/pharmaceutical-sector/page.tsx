import type { Metadata } from "next";
import { IndustryDirectionPage } from "@/components/IndustryDirectionPage";
import { pharmaceuticalSector } from "@/content/live/pharmaceuticalSector";

export const metadata: Metadata = {
  title: pharmaceuticalSector.title,
  description: pharmaceuticalSector.description,
  alternates: { canonical: pharmaceuticalSector.route },
};

export default function PharmaceuticalSectorPage() {
  return <IndustryDirectionPage route="/pharmaceutical-sector" />;
}
