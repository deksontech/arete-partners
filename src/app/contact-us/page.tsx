import type { Metadata } from "next";
import { PageRenderer } from "@/components/PageRenderer";
import { contactUs } from "@/content/live/contactUs";

export const metadata: Metadata = {
  title: contactUs.title,
  description: contactUs.description,
  alternates: { canonical: contactUs.route },
};

export default function ContactPage() {
  return <PageRenderer page={contactUs} />;
}
