import type { Metadata } from "next";
import { PageRenderer } from "@/components/PageRenderer";
import { products } from "@/content/live/products";

export const metadata: Metadata = {
  title: products.title,
  description: products.description,
  alternates: { canonical: products.route },
};

export default function ProductsPage() {
  return <PageRenderer page={products} />;
}
