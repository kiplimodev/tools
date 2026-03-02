"use client";

import { useState } from "react";
import SidebarToolLink from "./SidebarToolLink";
import type { ToolMeta } from "@/lib/registry-client";

export default function SidebarCategory({
  category,
  tools,
}: {
  category: string;
  tools: ToolMeta[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: "10px" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", fontWeight: "bold" }}
      >
        {category}
      </div>

      {open && (
        <div style={{ marginLeft: "10px", marginTop: "5px" }}>
          {tools.map((t) => (
            <SidebarToolLink
              key={t.slug}
              name={t.title}
              category={t.category}
              toolid={t.slug}
            />
          ))}
        </div>
      )}
    </div>
  );
}
