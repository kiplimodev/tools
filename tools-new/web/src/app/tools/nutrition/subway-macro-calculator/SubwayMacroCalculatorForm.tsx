"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultCalories: number;
  defaultProteinGrams: number;
  defaultFatGrams: number;
};

export default function SubwayMacroCalculatorForm({
  defaultCalories,
  defaultProteinGrams,
  defaultFatGrams,
}: Props) {
  const router = useRouter();

  const [calories, setCalories] = useState(defaultCalories);
  const [proteinGrams, setProteinGrams] = useState(defaultProteinGrams);
  const [fatGrams, setFatGrams] = useState(defaultFatGrams);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/nutrition/subway-macro-calculator?calories=${calories}&proteinGrams=${proteinGrams}&fatGrams=${fatGrams}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Calories</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Protein (g)</label>
        <input
          type="number"
          value={proteinGrams}
          onChange={(e) => setProteinGrams(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Fat (g)</label>
        <input
          type="number"
          value={fatGrams}
          onChange={(e) => setFatGrams(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
