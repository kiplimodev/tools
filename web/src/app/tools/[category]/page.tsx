import { getAllCategories, getToolsForCategory } from "@/lib/registry-client";
import { notFound } from "next/navigation";
import CategoryToolsPageClient from "./CategoryToolsPageClient";

export default async function CategoryToolsPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const categorySummary = getAllCategories().find((c) => c.id === category);
  const tools = getToolsForCategory(category);

  if (!categorySummary) notFound();

  return <CategoryToolsPageClient category={categorySummary} tools={tools} />;
}
