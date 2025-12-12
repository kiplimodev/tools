import { getToolDefinitionById } from "@/lib/registry-client";

export async function getTool(id: string): Promise<any> {
  const def = getToolDefinitionById(id);

  if (!def) {
    throw new Error(`Tool '${id}' not found.`);
  }

  const module = await import(def.importPath);
  return module.default ?? module.calculate;
}
