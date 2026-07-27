import type { Metadata } from "next";
import { BaselineHtmlRenderer } from "@/components/BaselineHtmlRenderer";
import { corporateFunctionBaselineHtml } from "@/content/corporateFunctionBaselineHtml";

export const metadata: Metadata = {
  title: "Corporate Function",
  description: "Corporate Function",
  alternates: { canonical: "/corporate-function" },
};

export default function CorporateFunctionPage() {
  return (
    <BaselineHtmlRenderer
      className="docx-corporate-function-baseline"
      html={corporateFunctionBaselineHtml}
    />
  );
}
