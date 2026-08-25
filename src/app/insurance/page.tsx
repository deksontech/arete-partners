import type { Metadata } from "next";
import { IndustryDirectionPage } from "@/components/IndustryDirectionPage";

export const metadata: Metadata = {
  title: "Insurance",
  description: "Insurance",
  alternates: { canonical: "/insurance" },
};

export default function InsurancePage() {
  return <IndustryDirectionPage route="/insurance" />;
}
