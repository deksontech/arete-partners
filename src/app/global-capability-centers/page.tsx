import type { Metadata } from "next";
import { BaselineHtmlRenderer } from "@/components/BaselineHtmlRenderer";
import { globalCapabilityCentersBaselineHtml } from "@/content/globalCapabilityCentersBaselineHtml";

export const metadata: Metadata = {
  title: "Global Capability Centers",
  description: "Global Capability Centers",
  alternates: { canonical: "/global-capability-centers" },
};

export default function GlobalCapabilityCentersPage() {
  return (
    <BaselineHtmlRenderer
      className="docx-global-capability-centers-baseline"
      html={globalCapabilityCentersBaselineHtml}
    />
  );
}
