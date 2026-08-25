import type { Metadata } from "next";
import { IndustryDirectionPage } from "@/components/IndustryDirectionPage";

export const metadata: Metadata = {
  title: "Healthcare",
  description: "Healthcare",
  alternates: { canonical: "/healthcare" },
};

export default function HealthcarePage() {
  return <IndustryDirectionPage route="/healthcare" />;
}
