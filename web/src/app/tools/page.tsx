import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAllCategories } from "@/lib/registry-client";
import Link from "next/link";

export default function ToolsIndexPage() {
  const categories = getAllCategories();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Fitness Tools</h1>
        <p className="text-neutral-600">Browse calculators and generators by category.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.id} className="flex h-full flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{category.name}</h2>
              <p className="text-sm text-neutral-600">{category.description}</p>
            </div>
            <div className="mt-4">
              <Button asChild className="w-full">
                <Link href={`/tools/${category.id}`}>Explore {category.name}</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
