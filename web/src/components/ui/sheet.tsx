"use client";

import clsx from "clsx";
import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface SheetContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SheetContext = createContext<SheetContextValue | null>(null);

export function Sheet({
  open,
  onOpenChange,
  children,
}: PropsWithChildren<SheetContextValue>) {
  const value = useMemo(() => ({ open, onOpenChange }), [open, onOpenChange]);
  return <SheetContext.Provider value={value}>{children}</SheetContext.Provider>;
}

function useSheetContext() {
  const context = useContext(SheetContext);
  if (!context) {
    throw new Error("Sheet components must be used within a Sheet parent.");
  }

  return context;
}

export function SheetContent({
  children,
  side = "left",
  className,
}: PropsWithChildren<{ side?: "left" | "right"; className?: string }>) {
  const { open, onOpenChange } = useSheetContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !open) return null;

  const content = (
    <div className="fixed inset-0 z-40 flex">
      <button
        type="button"
        aria-label="Close"
        onClick={() => onOpenChange(false)}
        className="absolute inset-0 bg-black/40"
      />
      <div
        className={clsx(
          "relative z-10 h-full w-72 bg-white shadow-xl transition-transform",
          side === "right" ? "ml-auto" : "mr-auto",
          className
        )}
      >
        {children}
      </div>
    </div>
  );

  return createPortal(content, document.body);
}

export function SheetClose({ children, className }: PropsWithChildren<{ className?: string }>) {
  const { onOpenChange } = useSheetContext();

  return (
    <button
      type="button"
      onClick={() => onOpenChange(false)}
      className={clsx(
        "absolute right-2 top-2 rounded-md p-2 text-sm text-neutral-500 hover:bg-neutral-100",
        className
      )}
    >
      {children}
    </button>
  );
}

export function SheetHeader({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={clsx("flex items-center justify-between border-b px-4 py-3", className)}>{children}</div>;
}
