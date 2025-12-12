import path from "path";

const SRC_ROOT = path.join(process.cwd(), "src");

export async function getTool(absPath: string): Promise<any> {
  // Normalize to an alias-based module specifier Next can resolve.
  let moduleSpecifier = absPath.replace(/\\/g, "/");

  if (moduleSpecifier.startsWith(SRC_ROOT.replace(/\\/g, "/"))) {
    const relative = moduleSpecifier.slice(SRC_ROOT.length + 1);
    moduleSpecifier = `@/${relative}`;
  }

  moduleSpecifier = moduleSpecifier
    .replace(/\.(ts|tsx|js|jsx)$/, "")
    .replace(/\/?index$/, "");

  const module = await import(moduleSpecifier);
  return module.default ?? module.calculate;
}
