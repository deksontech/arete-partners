import type { Metadata } from "next";
import { BaselineHtmlRenderer } from "@/components/BaselineHtmlRenderer";
import { processAdvisoryBaselineHtml } from "@/content/processAdvisoryBaselineHtml";

export const metadata: Metadata = {
  title: "Process Advisory",
  description: "Process Advisory",
  alternates: { canonical: "/process-advisory" },
};

export default function ProcessAdvisoryPage() {
  return (
    <BaselineHtmlRenderer
      className="docx-process-advisory-baseline"
      html={processAdvisoryBaselineHtml}
    />
  );
}
