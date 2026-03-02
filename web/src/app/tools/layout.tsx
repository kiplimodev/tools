import { Suspense } from "react";
import Sidebar from "@/components/sidebar/Sidebar";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: "20px" }}>
        <Suspense>{children}</Suspense>
      </div>
    </div>
  );
}
