import { tools } from "@/registry/registry";

export function getTool(id: string) {
  const def = tools.find((tool) => tool.id === id);

  if (!def) {
    throw new Error(`Tool '${id}' not found.`);
  }

  return def.calculate;
}
