import { pathToFileURL } from "url";

export function getTool(absPath: string): any {
  const fileUrl = pathToFileURL(absPath).href;
  return import(fileUrl).then((module) => module.default);
}
