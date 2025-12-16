"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { calculateProteinPowderScoops } from "@/lib/calculators/nutrition/protein-powder-calculator/protein-powder";

export default function ProteinPowderCalculatorPage() {
  return (
    <CalculatorLayout
      title="Protein Powder Calculator"
      description="Calculate how many scoops of protein powder you need to meet your daily protein goal."
      fields={[
        {
          name: "proteinTarget",
          label: "Daily Protein Target (g)",
          type: "number",
          required: true,
          helper: "Your total protein goal for the day.",
        },
        {
          name: "proteinFromFood",
          label: "Protein From Food (g)",
          type: "number",
          helper: "Optional. Protein you've already eaten today.",
        },
        {
          name: "proteinPerScoop",
          label: "Protein Per Scoop (g)",
          type: "number",
          required: true,
          helper: "Check the nutrition label on your protein powder.",
        },
      ]}
      calculate={calculateProteinPowderScoops}
      resultLabel="Protein Powder Needed"
      resultUnit="scoops"
    />
  );
}
