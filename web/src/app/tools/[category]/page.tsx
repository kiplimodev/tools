import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAllCategories, getToolsForCategory } from "@/lib/registry-client";
import { notFound } from "next/navigation";

export default function CategoryToolsPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const categorySummary = getAllCategories().find((cat) => cat.id === category);
  const tools = getToolsForCategory(category);

  if (!categorySummary || !tools.length) {
    notFound();
  }

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">{categorySummary.name}</h1>
        <p className="text-neutral-600">{categorySummary.description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.id} className="flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">{tool.name}</h2>
              <p className="text-sm text-neutral-600">{tool.description}</p>
            </div>
            <div className="mt-4">
              <Button asChild className="w-full">
                <Link href={tool.path}>Open Tool</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
