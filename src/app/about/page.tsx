import type { Metadata } from "next";
import { BaselineHtmlRenderer } from "@/components/BaselineHtmlRenderer";
import { aboutBaselineHtml } from "@/content/aboutBaselineHtml";
import { about } from "@/content/live/about";

export const metadata: Metadata = {
  title: about.title,
  description: about.description,
  alternates: { canonical: about.route },
};

export default function AboutPage() {
  return <BaselineHtmlRenderer className="docx-about-baseline" html={aboutBaselineHtml} />;
}
