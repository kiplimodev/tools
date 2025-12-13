"use client";

import Link from "next/link";
import { icons } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CategorySummary, ToolSummary } from "@/lib/registry-client";

interface CategoryToolsPageClientProps {
  category: CategorySummary;
  tools: ToolSummary[];
}

export default function CategoryToolsPageClient({
  category,
  tools,
}: CategoryToolsPageClientProps) {
  const Icon = icons[category.iconId];

  return (
    <div className="space-y-6 p-6">
      <div>
        <div className="flex items-center gap-2">
          {Icon ? (
            <span className="rounded-md bg-neutral-100 p-2 text-neutral-700">
              <Icon className="h-5 w-5" />
            </span>
          ) : null}
          <h1 className="text-2xl font-bold">{category.name}</h1>
        </div>
        <p className="text-neutral-600">{category.description}</p>
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
