import Sidebar from "@/components/sidebar/Sidebar";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside>
        <Sidebar />
      </aside>

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
