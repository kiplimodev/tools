"use client";

import { useState, type ReactNode } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetClose } from "@/components/ui/sheet";
import { MenuIcon } from "@/components/icons";

export default function ToolsLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-neutral-50">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="flex-1">
        <div className="sticky top-0 z-30 border-b bg-white p-3 lg:hidden">
          <Button variant="ghost" onClick={() => setOpen(true)} className="flex items-center gap-2">
            <MenuIcon className="h-5 w-5" />
            <span className="font-semibold">Open tools</span>
          </Button>
        </div>

        <div className="p-4 lg:p-8">{children}</div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <div className="text-base font-semibold">Fitness Tools</div>
            <SheetClose aria-label="Close menu">×</SheetClose>
          </SheetHeader>
          <div className="h-full overflow-y-auto p-2 pb-6">
            <Sidebar onNavigate={() => setOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
