interface ToolLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function ToolLayout({
  title,
  description,
  children,
}: ToolLayoutProps) {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">{title}</h1>
        {description && (
          <p className="text-base text-neutral-600">{description}</p>
        )}
      </header>

      <div className="space-y-6">{children}</div>
    </div>
  );
}
