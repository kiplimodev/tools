// src/components/CalculatorLayout.tsx
import React from "react";

export default function CalculatorLayout({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <main style={{ padding: "24px" }}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <section>{children}</section>
    </main>
  );
}
