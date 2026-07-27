import type { Metadata } from "next";
import { BaselineHtmlRenderer } from "@/components/BaselineHtmlRenderer";
import { pharmaceuticalSector } from "@/content/live/pharmaceuticalSector";
import { pharmaBaselineHtml } from "@/content/pharmaBaselineHtml";

export const metadata: Metadata = {
  title: pharmaceuticalSector.title,
  description: pharmaceuticalSector.description,
  alternates: { canonical: pharmaceuticalSector.route },
};

export default function PharmaceuticalSectorPage() {
  return <BaselineHtmlRenderer className="docx-pharma-baseline" html={pharmaBaselineHtml} />;
}
