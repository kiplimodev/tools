import { NextResponse } from "next/server";
import { getTool } from "@tools/registry/getTool";

export type RunToolRequest = {
  id: string;
  inputs?: unknown;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as RunToolRequest | null;

  if (!body || typeof body.id !== "string" || !body.id.trim()) {
    return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
  }

  let tool;
  try {
    tool = getTool(body.id);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Tool not found" },
      { status: 404 },
    );
  }

  try {
    const result = await Promise.resolve(tool.run(body.inputs ?? {}));
    return NextResponse.json({ tool: tool.name, result });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to run tool" },
      { status: 400 },
    );
  }
}
