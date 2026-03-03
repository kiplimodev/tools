import MobileNavShell from "@/components/MobileNavShell";
import Sidebar from "@/components/sidebar/Sidebar";

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <MobileNavShell sidebar={<Sidebar />}>{children}</MobileNavShell>;
}
