import { NextResponse } from "next/server";
import { loadCalculatorInputDefinition } from "@/lib/form-utils";
import { buildZodSchema } from "@/lib/zod-utils";
import { getToolByCategoryAndId } from "@/lib/registry-client";

export async function POST(
  request: Request,
  { params }: { params: { category: string; toolId: string } }
) {
  try {
    const { category, toolId } = params;
    const tool = getToolByCategoryAndId(category, toolId);
    const fields = loadCalculatorInputDefinition(tool.path);
    const schema = buildZodSchema(fields);
    const payload = await request.json();
    const parsed = schema.parse(payload);
    const result = tool.calculate(parsed);

    return NextResponse.json({ success: true, data: result });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message ?? "Unable to process request" },
      { status: 400 }
    );
  }
}
