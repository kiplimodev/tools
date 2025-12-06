interface ResultCardProps {
  title: string;
  value: string | number;
  unit?: string;
}

export function ResultCard({ title, value, unit }: ResultCardProps) {
  return (
    <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
      <p className="text-sm text-neutral-600">{title}</p>
      <p className="mt-1 text-2xl font-semibold">
        {value}
        {unit && <span className="text-lg ml-1 text-neutral-500">{unit}</span>}
      </p>
    </div>
  );
}
