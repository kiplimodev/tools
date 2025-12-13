import { getTool } from "@/registry/getTool";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { category: string; toolId: string } }
) {
  try {
    const tool = getTool(params.category, params.toolId);

    let input: unknown;
    try {
      const body = await request.json();
      input = tool.inputSchema.parse(body);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Invalid input";
      return NextResponse.json(
        { success: false, error: message },
        { status: 400 }
      );
    }

    try {
      const result = tool.calculate(input);
      const data = tool.outputSchema.parse(result);
      return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Calculation failed";
      return NextResponse.json(
        { success: false, error: message },
        { status: 400 }
      );
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Tool not found";
    return NextResponse.json(
      { success: false, error: message },
      { status: 400 }
    );
  }
}
