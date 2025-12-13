"use client";

import clsx from "clsx";
import {
  createContext,
  useContext,
  useMemo,
  type PropsWithChildren,
  type ReactNode,
} from "react";

interface CollapsibleContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CollapsibleContext = createContext<CollapsibleContextValue | null>(null);

export function Collapsible({
  open,
  onOpenChange,
  children,
}: PropsWithChildren<CollapsibleContextValue>) {
  const value = useMemo(() => ({ open, onOpenChange }), [open, onOpenChange]);
  return <CollapsibleContext.Provider value={value}>{children}</CollapsibleContext.Provider>;
}

function useCollapsibleContext() {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error("Collapsible components must be used within a Collapsible parent.");
  }

  return context;
}

interface CollapsibleTriggerProps extends PropsWithChildren {
  className?: string;
}

export function CollapsibleTrigger({ children, className }: CollapsibleTriggerProps) {
  const { open, onOpenChange } = useCollapsibleContext();

  return (
    <button
      type="button"
      onClick={() => onOpenChange(!open)}
      className={clsx(
        "flex w-full items-center justify-between rounded-md px-3 py-2 text-left transition-colors",
        "hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300",
        className
      )}
    >
      {children}
    </button>
  );
}

interface CollapsibleContentProps extends PropsWithChildren {
  className?: string;
}

export function CollapsibleContent({ children, className }: CollapsibleContentProps) {
  const { open } = useCollapsibleContext();

  if (!open) return null;

  return <div className={clsx("px-2", className)}>{children}</div>;
}
