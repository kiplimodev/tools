import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import type { ToolDefinition } from "@registry/registry";

export type FieldKind = "number" | "string" | "boolean" | "enum" | "unknown";

export interface InputFieldDefinition {
  name: string;
  type: FieldKind;
  options?: string[];
  optional: boolean;
}

function normalizeRegistryPath(registryPath: string): string {
  const withoutLeading = registryPath.replace(/^\//, "");
  return withoutLeading.replace(/^tools\//, "");
}

function resolveTypesPath(registryPath: string): string {
  const normalized = normalizeRegistryPath(registryPath);
  return path.resolve(process.cwd(), "..", normalized, "types.ts");
}

export function loadCalculatorInputDefinition(
  tool: ToolDefinition | string
): InputFieldDefinition[] {
  const registryPath = typeof tool === "string" ? tool : tool.path;
  const typesPath = resolveTypesPath(registryPath);
  const fileContent = fs.readFileSync(typesPath, "utf8");
  const sourceFile = ts.createSourceFile(typesPath, fileContent, ts.ScriptTarget.Latest, true);

  const fields: InputFieldDefinition[] = [];

  sourceFile.forEachChild((node) => {
    if (ts.isInterfaceDeclaration(node) && node.name.text === "CalculatorInput") {
      node.members.forEach((member) => {
        if (!ts.isPropertySignature(member) || !member.type || !member.name) return;
        const name = member.name.getText(sourceFile);
        const parsed = parseTypeNode(member.type);
        fields.push({
          name,
          ...parsed,
          optional: Boolean(member.questionToken),
        });
      });
    }
  });

  return fields;
}

function parseTypeNode(node: ts.TypeNode): { type: FieldKind; options?: string[] } {
  if (ts.isUnionTypeNode(node)) {
    const literalOptions = node.types
      .map((variant) => {
        if (ts.isLiteralTypeNode(variant) && ts.isStringLiteral(variant.literal)) {
          return variant.literal.text;
        }
        return undefined;
      })
      .filter((value): value is string => Boolean(value));

    if (literalOptions.length === node.types.length && literalOptions.length > 0) {
      return { type: "enum", options: literalOptions };
    }
  }

  if (ts.isLiteralTypeNode(node) && ts.isStringLiteral(node.literal)) {
    return { type: "enum", options: [node.literal.text] };
  }

  if (node.kind === ts.SyntaxKind.NumberKeyword) return { type: "number" };
  if (node.kind === ts.SyntaxKind.StringKeyword) return { type: "string" };
  if (node.kind === ts.SyntaxKind.BooleanKeyword) return { type: "boolean" };

  return { type: "unknown" };
}

export function buildDefaultValues(fields: InputFieldDefinition[]): Record<string, unknown> {
  const defaults: Record<string, unknown> = {};
  fields.forEach((field) => {
    if (field.type === "number") {
      defaults[field.name] = 0;
    } else if (field.type === "boolean") {
      defaults[field.name] = false;
    } else if (field.type === "enum") {
      defaults[field.name] = field.options?.[0] ?? "";
    } else {
      defaults[field.name] = "";
    }
  });
  return defaults;
}
