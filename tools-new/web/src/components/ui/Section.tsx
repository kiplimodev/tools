interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-4 border-b pb-6">
      {title && (
        <h3 className="text-lg font-medium text-neutral-800">{title}</h3>
      )}
      <div>{children}</div>
    </section>
  );
}
