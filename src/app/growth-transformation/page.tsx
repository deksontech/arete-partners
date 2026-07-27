import type { Metadata } from "next";
import { BaselineHtmlRenderer } from "@/components/BaselineHtmlRenderer";
import { growthTransformationBaselineHtml } from "@/content/growthTransformationBaselineHtml";
import { growthTransformation } from "@/content/live/growthTransformation";

export const metadata: Metadata = {
  title: growthTransformation.title,
  description: growthTransformation.description,
  alternates: { canonical: growthTransformation.route },
};

export default function GrowthTransformationPage() {
  return (
    <BaselineHtmlRenderer
      className="docx-growth-transformation-baseline"
      html={growthTransformationBaselineHtml}
    />
  );
}
