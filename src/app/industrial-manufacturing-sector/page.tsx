import type { Metadata } from "next";
import { BaselineHtmlRenderer } from "@/components/BaselineHtmlRenderer";
import { industrialManufacturingSectorBaselineHtml } from "@/content/industrialManufacturingSectorBaselineHtml";

export const metadata: Metadata = {
  title: "Industrial Manufacturing Sector",
  description: "Industrial Manufacturing Sector",
  alternates: { canonical: "/industrial-manufacturing-sector" },
};

export default function IndustrialManufacturingSectorPage() {
  return (
    <BaselineHtmlRenderer
      className="docx-industrial-manufacturing-sector-baseline"
      html={industrialManufacturingSectorBaselineHtml}
    />
  );
}
