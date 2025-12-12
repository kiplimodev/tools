import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buildNavigation } from "@/lib/registry-client";

interface CategoryPageProps {
  params: { category: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const navigation = buildNavigation();
  const category = navigation.find((item) => item.category === params.category);
  if (!category) return notFound();

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-600">{category.category}</p>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">{category.category} tools</h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Explore every calculator under the {category.category} category.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {category.tools.map((tool) => (
          <Card key={tool.id}>
            <CardHeader>
              <CardTitle>{tool.name}</CardTitle>
              <CardDescription className="uppercase tracking-[0.2em] text-zinc-400">{tool.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href={tool.path}
                className="inline-flex items-center text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-200"
              >
                Open calculator
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
