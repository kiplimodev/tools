"use client";

import { useState } from "react";
import SidebarToolLink from "./SidebarToolLink";
import { getToolsByCategory } from "@/lib/registry-client";

export default function SidebarCategory({ category }: { category: string }) {
  const [open, setOpen] = useState(false);
  const tools = getToolsByCategory(category);

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
              key={t.id}
              name={t.name}
              category={category}
              toolid={t.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
