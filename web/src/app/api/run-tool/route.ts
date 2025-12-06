import { NextResponse } from "next/server";
import { getTool } from "@tools/registry/getTool";

export type RunToolRequest = {
  tool: string;
  payload?: unknown;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as RunToolRequest | null;

  if (!body || typeof body.tool !== "string" || !body.tool.trim()) {
    return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
  }

  const tool = getTool(body.tool);

  if (!tool) {
    return NextResponse.json({ error: "Tool not found" }, { status: 404 });
  }

  try {
    const result = tool.run(body.payload ?? {});
    return NextResponse.json({ tool: tool.name, result });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to run tool" },
      { status: 400 },
    );
  }
}
