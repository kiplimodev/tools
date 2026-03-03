import { getToolDefinition } from "@/lib/registry-client";
import type { Metadata } from "next";
import { getTool } from "@/registry";

type Params = { category: string; toolid: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { toolid } = await params;
  const meta = getTool(toolid);
  if (!meta) return { title: "Tool Not Found | Denstar Fitness" };
  return {
    title: `${meta.title} | Denstar Fitness`,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | Denstar Fitness`,
      description: meta.description,
      url: `https://tools.denstarfitness.com${meta.path}`,
      images: [{ url: `/api/og?tool=${meta.slug}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} | Denstar Fitness`,
      description: meta.description,
      images: [`/api/og?tool=${meta.slug}`],
    },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, toolid } = await params;
  const def = getToolDefinition(category, toolid);

  if (!def) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30">
        <h1 className="text-xl font-semibold text-red-800 dark:text-red-200">Tool not found</h1>
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          No tool exists at <code className="font-mono">/tools/{category}/{toolid}</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/30">
      <h1 className="text-xl font-semibold text-amber-800 dark:text-amber-200">{def.name}</h1>
      <p className="mt-1 text-sm text-amber-600 dark:text-amber-400">
        This tool is registered but does not have a dedicated page yet.
      </p>
    </div>
  );
}
