"use client";

import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  label?: string;
  loading?: boolean;
}

export function SubmitButton({ label = "Calculate", loading = false }: SubmitButtonProps) {
  return (
    <Button type="submit" disabled={loading}>
      {loading ? "Calculating..." : label}
    </Button>
  );
}
