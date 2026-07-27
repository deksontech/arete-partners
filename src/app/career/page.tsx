import type { Metadata } from "next";
import { BaselineHtmlRenderer } from "@/components/BaselineHtmlRenderer";
import { careersBaselineHtml } from "@/content/careersBaselineHtml";
import { career } from "@/content/live/career";

export const metadata: Metadata = {
  title: career.title,
  description: career.description,
  alternates: { canonical: career.route },
};

export default function CareerPage() {
  return <BaselineHtmlRenderer className="docx-careers-baseline" html={careersBaselineHtml} />;
}
