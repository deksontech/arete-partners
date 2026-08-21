import type { Metadata } from "next";
import { BaselineHtmlRenderer } from "@/components/BaselineHtmlRenderer";
import { healthcarePageHtml } from "@/content/healthcarePageHtml";

export const metadata: Metadata = {
  title: "Healthcare",
  description: "Healthcare",
  alternates: { canonical: "/healthcare" },
};

export default function HealthcarePage() {
  return <BaselineHtmlRenderer className="docx-healthcare-baseline" html={healthcarePageHtml} />;
}
