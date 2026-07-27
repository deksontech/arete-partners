import type { Metadata } from "next";
import { BaselineHtmlRenderer } from "@/components/BaselineHtmlRenderer";
import { operationalExcellenceBaselineHtml } from "@/content/operationalExcellenceBaselineHtml";

export const metadata: Metadata = {
  title: "Operational Excellence",
  description: "Operational Excellence",
  alternates: { canonical: "/operational-excellence" },
};

export default function OperationalExcellencePage() {
  return (
    <BaselineHtmlRenderer
      className="docx-operational-excellence-baseline"
      html={operationalExcellenceBaselineHtml}
    />
  );
}
