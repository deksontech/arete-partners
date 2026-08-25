import type { Metadata } from "next";
import { ServiceDirectionPage, serviceDirectionPages } from "@/components/ServiceDirectionPage";

export const metadata: Metadata = {
  title: "Corporate Function",
  description: "Corporate Function",
  alternates: { canonical: "/corporate-function" },
};

export default function CorporateFunctionPage() {
  return <ServiceDirectionPage data={serviceDirectionPages["corporate-function"]} />;
}
