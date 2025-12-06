import { findTool, registeredTools, type RegisteredTool } from "./registry";

export { registeredTools };

export function getTool(id: string): RegisteredTool {
  if (!id || typeof id !== "string" || !id.trim()) {
    throw new Error("Tool id must be a non-empty string");
  }

  const tool = findTool(id);

  if (!tool) {
    throw new Error(`Tool '${id}' not found`);
  }

  return tool;
}
