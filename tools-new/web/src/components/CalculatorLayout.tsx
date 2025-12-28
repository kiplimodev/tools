import { ReactNode } from "react";

export default function CalculatorLayout({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold">{title}</h1>
        {description && (
          <p className="text-zinc-600">{description}</p>
        )}
      </header>

      <section className="space-y-6">{children}</section>
    </div>
  );
}
