import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";

export function SubmitButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <Button type="submit" {...props} />;
}
