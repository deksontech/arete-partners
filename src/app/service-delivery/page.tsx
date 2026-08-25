import type { Metadata } from "next";
import { ServiceDirectionPage, serviceDirectionPages } from "@/components/ServiceDirectionPage";

export const metadata: Metadata = {
  title: "Service Delivery",
  description: "Service Delivery",
  alternates: { canonical: "/service-delivery" },
};

export default function ServiceDeliveryPage() {
  return <ServiceDirectionPage data={serviceDirectionPages["service-delivery"]} />;
}
