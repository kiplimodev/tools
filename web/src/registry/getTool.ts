import path from "path";

const SRC_ROOT = path.join(process.cwd(), "src");

export async function getTool(absPath: string): Promise<any> {
  // Convert absolute filesystem path to a module specifier Next can resolve.
  let moduleSpecifier = absPath;

  if (absPath.startsWith(SRC_ROOT)) {
    const relative = absPath
      .slice(SRC_ROOT.length + 1)
      .replace(/\\/g, "/")
      .replace(/\.(ts|tsx)$/, "");
    moduleSpecifier = `@/${relative}`;
  }

  const module = await import(moduleSpecifier);
  return module.default ?? module.calculate;
}
