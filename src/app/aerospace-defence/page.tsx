import type { Metadata } from "next";
import { IndustryDirectionPage } from "@/components/IndustryDirectionPage";

export const metadata: Metadata = {
  title: "Aerospace & Defence",
  description: "Aerospace & Defence",
  alternates: { canonical: "/aerospace-defence" },
};

export default function AerospaceDefencePage() {
  return <IndustryDirectionPage route="/aerospace-defence" />;
}
