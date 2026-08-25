import type { Metadata } from "next";
import { IndustryDirectionPage } from "@/components/IndustryDirectionPage";

export const metadata: Metadata = {
  title: "Education",
  description: "Education",
  alternates: { canonical: "/education" },
};

export default function EducationPage() {
  return <IndustryDirectionPage route="/education" />;
}
