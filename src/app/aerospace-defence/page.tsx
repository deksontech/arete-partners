import type { Metadata } from "next";
import { BaselineHtmlRenderer } from "@/components/BaselineHtmlRenderer";
import { aerospaceDefenceBaselineHtml } from "@/content/aerospaceDefenceBaselineHtml";

export const metadata: Metadata = {
  title: "Aerospace & Defence",
  description: "Aerospace & Defence",
  alternates: { canonical: "/aerospace-defence" },
};

export default function AerospaceDefencePage() {
  return (
    <BaselineHtmlRenderer
      className="docx-aerospace-defence-baseline"
      html={aerospaceDefenceBaselineHtml}
    />
  );
}
