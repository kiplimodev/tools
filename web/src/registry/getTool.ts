import { getTool as getToolMeta } from "./index";

export async function getTool(id: string): Promise<unknown> {
  const meta = getToolMeta(id);

  if (!meta) {
    throw new Error(`Tool '${id}' not found.`);
  }

  const mod = await import(`@/${meta.category}/${meta.slug}`);
  return mod.default ?? mod.calculator;
}
