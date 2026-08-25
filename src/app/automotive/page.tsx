import type { Metadata } from "next";
import { IndustryDirectionPage } from "@/components/IndustryDirectionPage";

export const metadata: Metadata = {
  title: "Automotive",
  description: "Automotive",
  alternates: { canonical: "/automotive" },
};

export default function AutomotivePage() {
  return <IndustryDirectionPage route="/automotive" />;
}
