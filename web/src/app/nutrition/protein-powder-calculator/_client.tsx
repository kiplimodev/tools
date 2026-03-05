"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { calculator } from "@/lib/calculators/nutrition/protein-powder-calculator";
import type { Input } from "@/lib/calculators/nutrition/protein-powder-calculator";

export default function ProteinPowderClientPage() {
  return (
    <CalculatorLayout<Input>
      title="Protein Powder Calculator"
      description="Calculate how many scoops of protein powder you need to meet your daily protein goal."
      fields={[
        {
          name: "proteinTarget",
          label: "Daily Protein Target (g)",
          type: "number",
          required: true,
        },
        {
          name: "proteinFromFood",
          label: "Protein From Food (g)",
          type: "number",
          required: false,
        },
        {
          name: "proteinPerScoop",
          label: "Protein Per Scoop (g)",
          type: "number",
          required: true,
        },
      ]}
      calculate={calculator}
      renderResult={(result) => (
        <p>
          <strong>Protein powder needed:</strong> {result} scoops
        </p>
      )}
    />
  );
}
