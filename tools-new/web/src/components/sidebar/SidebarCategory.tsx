"use client";

import { useState } from "react";
import SidebarToolLink from "./SidebarToolLink";

export default function SidebarCategory({
  category,
  tools,
}: {
  category: string;
  tools: { id: string; name: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="font-medium capitalize"
      >
        {category.replace("-", " ")}
      </button>

      {open && (
        <div className="ml-4 mt-2 space-y-1">
          {tools.map((tool) => (
            <SidebarToolLink
              key={tool.id}
              category={category}
              toolid={tool.id}
              name={tool.name}
            />
          ))}
        </div>
      )}
    </div>
  );
}
