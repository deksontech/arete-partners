import type { Metadata } from "next";
import { IndustryDirectionPage } from "@/components/IndustryDirectionPage";

export const metadata: Metadata = {
  title: "Global Capability Centers",
  description: "Global Capability Centers",
  alternates: { canonical: "/global-capability-centers" },
};

export default function GlobalCapabilityCentersPage() {
  return <IndustryDirectionPage route="/global-capability-centers" />;
}
