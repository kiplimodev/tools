import { getToolDefinitionById } from "@/lib/registry-client";

export function getTool(id: string) {
  const def = getToolDefinitionById(id);

  if (!def) {
    throw new Error(`Tool '${id}' not found.`);
  }

  return def.calculate;
}
