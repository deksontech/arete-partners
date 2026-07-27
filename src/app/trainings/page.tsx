import type { Metadata } from "next";
import { PageRenderer } from "@/components/PageRenderer";
import { trainings } from "@/content/live/trainings";

export const metadata: Metadata = {
  title: trainings.title,
  description: trainings.description,
  alternates: { canonical: trainings.route },
};

export default function TrainingsPage() {
  return <PageRenderer page={trainings} />;
}
