import type { Metadata } from "next";
import { IndustryDirectionPage } from "@/components/IndustryDirectionPage";

export const metadata: Metadata = {
  title: "Industrial Manufacturing Sector",
  description: "Industrial Manufacturing Sector",
  alternates: { canonical: "/industrial-manufacturing-sector" },
};

export default function IndustrialManufacturingSectorPage() {
  return <IndustryDirectionPage route="/industrial-manufacturing-sector" />;
}
