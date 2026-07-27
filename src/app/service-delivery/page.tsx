import type { Metadata } from "next";
import { BaselineHtmlRenderer } from "@/components/BaselineHtmlRenderer";
import { serviceDeliveryBaselineHtml } from "@/content/serviceDeliveryBaselineHtml";

export const metadata: Metadata = {
  title: "Service Delivery",
  description: "Service Delivery",
  alternates: { canonical: "/service-delivery" },
};

export default function ServiceDeliveryPage() {
  return (
    <BaselineHtmlRenderer
      className="docx-service-delivery-baseline"
      html={serviceDeliveryBaselineHtml}
    />
  );
}
