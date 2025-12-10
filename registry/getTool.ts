import { tools } from "./registry";

export function getTool(id: string) {
  const tool = tools.find((t) => t.id === id);
  if (!tool) {
    throw new Error(`Tool '${id}' not found.`);
  }
  return tool.calculate;
}
