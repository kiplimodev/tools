import { Card, CardContent } from "@/components/ui/card";

interface ToolDescriptionProps {
  description: string;
}

export function ToolDescription({ description }: ToolDescriptionProps) {
  return (
    <Card>
      <CardContent className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        {description}
      </CardContent>
    </Card>
  );
}
