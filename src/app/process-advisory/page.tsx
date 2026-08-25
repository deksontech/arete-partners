import type { Metadata } from "next";
import { ServiceDirectionPage, serviceDirectionPages } from "@/components/ServiceDirectionPage";

export const metadata: Metadata = {
  title: "Process Advisory",
  description: "Process Advisory",
  alternates: { canonical: "/process-advisory" },
};

export default function ProcessAdvisoryPage() {
  return <ServiceDirectionPage data={serviceDirectionPages["process-advisory"]} />;
}
