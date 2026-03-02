import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { getTool } from "@/registry";

export const runtime = "edge";

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("tool") ?? "";
  const tool = getTool(slug);

  const title = tool?.title ?? "Denstar Fitness";
  const description = tool?.description ?? "Precision calculators for athletes and coaches.";
  const category = tool?.category ?? "";

  function formatCategory(cat: string): string {
    return cat
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #eef2ff 100%)",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              background: "#10b981",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
            }}
          />
          <span style={{ fontSize: "20px", fontWeight: 700, color: "#18181b" }}>
            Denstar Fitness
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {category && (
            <span
              style={{
                display: "inline-flex",
                fontSize: "14px",
                fontWeight: 600,
                color: "#059669",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              {formatCategory(category)}
            </span>
          )}
          <h1
            style={{
              fontSize: title.length > 30 ? "44px" : "56px",
              fontWeight: 700,
              color: "#18181b",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "22px",
              color: "#52525b",
              margin: 0,
              lineHeight: 1.4,
              maxWidth: "800px",
            }}
          >
            {description}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "16px",
            color: "#71717a",
          }}
        >
          <span>denstar.fitness</span>
          <span>·</span>
          <span>Science-backed fitness calculators</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
