import type { Metadata } from "next";
import { BaselineHtmlRenderer } from "@/components/BaselineHtmlRenderer";
import { educationBaselineHtml } from "@/content/educationBaselineHtml";

export const metadata: Metadata = {
  title: "Education",
  description: "Education",
  alternates: { canonical: "/education" },
};

export default function EducationPage() {
  return <BaselineHtmlRenderer className="docx-education-baseline" html={educationBaselineHtml} />;
}
