import type { Metadata } from "next";
import { BaselineHtmlRenderer } from "@/components/BaselineHtmlRenderer";
import { automotiveBaselineHtml } from "@/content/automotiveBaselineHtml";

export const metadata: Metadata = {
  title: "Automotive",
  description: "Automotive",
  alternates: { canonical: "/automotive" },
};

export default function AutomotivePage() {
  return <BaselineHtmlRenderer className="docx-automotive-baseline" html={automotiveBaselineHtml} />;
}
