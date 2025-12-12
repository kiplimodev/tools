import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buildNavigation } from "@/lib/registry-client";

export const metadata = {
  title: "Tools | Denstar Fitness",
  description: "Browse all fitness calculators organized by category.",
};

export default function ToolsIndexPage() {
  const navigation = buildNavigation();
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-600">Tools</p>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">All Fitness Calculators</h1>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600 dark:text-zinc-300">
          Auto-generated interfaces for every Denstar calculator. Choose a category to start exploring calculators and planners.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {navigation.map((category) => (
          <Card key={category.category} className="h-full">
            <CardHeader>
              <CardTitle className="capitalize">{category.category}</CardTitle>
              <CardDescription>{category.tools.length} tools</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {category.tools.map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.path}
                  className="flex items-center justify-between rounded-md border border-transparent px-2 py-2 text-sm text-emerald-700 transition hover:border-emerald-200 hover:bg-emerald-50 dark:text-emerald-200 dark:hover:border-emerald-900 dark:hover:bg-emerald-900/20"
                >
                  <span>{tool.name}</span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">{tool.id}</span>
                </Link>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
