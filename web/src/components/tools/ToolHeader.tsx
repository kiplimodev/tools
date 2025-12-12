import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ToolHeaderProps {
  title: string;
  category: string;
}

export function ToolHeader({ title, category }: ToolHeaderProps) {
  return (
    <Card className="border-0 bg-transparent shadow-none">
      <CardHeader className="px-0 pb-2">
        <CardTitle className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-0 pt-0 text-sm text-zinc-500 dark:text-zinc-400">
        <p className="uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-300">{category}</p>
      </CardContent>
    </Card>
  );
}
