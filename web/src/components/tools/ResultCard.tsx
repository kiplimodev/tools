import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResultCardProps {
  data: Record<string, any> | null;
}

export function ResultCard({ data }: ResultCardProps) {
  if (!data) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex items-start justify-between gap-4">
            <span className="font-medium text-zinc-700 dark:text-zinc-200">{key}</span>
            <span className="text-right text-zinc-600 dark:text-zinc-300">
              {typeof value === "object" ? JSON.stringify(value, null, 2) : String(value)}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
