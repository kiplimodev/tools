"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultProteinTargetGrams: number;
  defaultProteinPerScoopGrams: number;
};

export default function ProteinPowderCalculatorForm({
  defaultProteinTargetGrams,
  defaultProteinPerScoopGrams,
}: Props) {
  const router = useRouter();

  const [proteinTargetGrams, setProteinTargetGrams] = useState(
    defaultProteinTargetGrams
  );
  const [proteinPerScoopGrams, setProteinPerScoopGrams] = useState(
    defaultProteinPerScoopGrams
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/nutrition/protein-powder-calculator?proteinTargetGrams=${proteinTargetGrams}&proteinPerScoopGrams=${proteinPerScoopGrams}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Protein Target (grams)</label>
        <input
          type="number"
          value={proteinTargetGrams}
          onChange={(e) =>
            setProteinTargetGrams(Number(e.target.value))
          }
        />
      </div>

      <div>
        <label>Protein per Scoop (grams)</label>
        <input
          type="number"
          value={proteinPerScoopGrams}
          onChange={(e) =>
            setProteinPerScoopGrams(Number(e.target.value))
          }
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
