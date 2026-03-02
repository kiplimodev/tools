import { NextRequest, NextResponse } from "next/server";
import { getTool as getToolMeta } from "@/registry";

export type RunToolRequest = {
  id: string;
  inputs?: unknown;
};

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as RunToolRequest | null;

  if (!body || typeof body.id !== "string" || !body.id.trim()) {
    return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
  }

  const meta = getToolMeta(body.id);
  if (!meta) {
    return NextResponse.json({ error: `Tool '${body.id}' not found` }, { status: 404 });
  }

  // Static tool execution is not yet implemented.
  // Each tool has a dedicated page at meta.path that handles computation via URL search params.
  return NextResponse.json(
    {
      error: "Direct tool API not yet implemented. Use the tool page at: " + meta.path,
      tool: meta.title,
      path: meta.path,
    },
    { status: 501 },
  );
}
