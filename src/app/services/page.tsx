import type { Metadata } from "next";
import { BaselineHtmlRenderer } from "@/components/BaselineHtmlRenderer";
import { services } from "@/content/live/services";
import { servicesBaselineHtml } from "@/content/servicesBaselineHtml";

export const metadata: Metadata = {
  title: services.title,
  description: services.description,
  alternates: { canonical: services.route },
};

export default function ServicesPage() {
  return <BaselineHtmlRenderer className="docx-services-baseline" html={servicesBaselineHtml} />;
}
