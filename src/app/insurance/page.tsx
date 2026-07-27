import type { Metadata } from "next";
import { BaselineHtmlRenderer } from "@/components/BaselineHtmlRenderer";
import { insuranceBaselineHtml } from "@/content/insuranceBaselineHtml";

export const metadata: Metadata = {
  title: "Insurance",
  description: "Insurance",
  alternates: { canonical: "/insurance" },
};

export default function InsurancePage() {
  return <BaselineHtmlRenderer className="docx-insurance-baseline" html={insuranceBaselineHtml} />;
}
