import { getTool, tools } from "./registry";

export { getTool };

export function getCalculator(id: string) {
  const tool = tools.find((entry) => entry.id === id);

  if (!tool) {
    const id = toolId ? `${categoryOrId}/${toolId}` : categoryOrId;
    throw new Error(`Tool '${id}' not found.`);
  }

  return tool.calculate;
}
