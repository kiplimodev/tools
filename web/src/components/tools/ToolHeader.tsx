interface ToolHeaderProps {
  title: string;
  subtitle?: string;
}

export function ToolHeader({ title, subtitle }: ToolHeaderProps) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {subtitle && (
        <p className="text-neutral-600 text-sm mt-1">{subtitle}</p>
      )}
    </div>
  );
}
