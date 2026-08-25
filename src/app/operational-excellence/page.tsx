import type { Metadata } from "next";
import { ServiceDirectionPage, serviceDirectionPages } from "@/components/ServiceDirectionPage";

export const metadata: Metadata = {
  title: "Operational Excellence",
  description: "Operational Excellence",
  alternates: { canonical: "/operational-excellence" },
};

export default function OperationalExcellencePage() {
  return <ServiceDirectionPage data={serviceDirectionPages["operational-excellence"]} />;
}
