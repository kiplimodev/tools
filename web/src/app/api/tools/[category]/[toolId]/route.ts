import { getTool } from "@/registry/registry";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { category: string; toolId: string } }
) {
  try {
    const { category, toolId } = params;
    const tool = getTool(category, toolId);

    const body = await req.json();
    const parsedInput = tool.schemas.inputSchema.parse(body);

    const result = tool.calculate(parsedInput);
    const parsedOutput = tool.schemas.outputSchema.parse(result);

    return NextResponse.json(parsedOutput);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid input";
    return NextResponse.json({ success: false, error: message }, { status: 400 });
  }
}
