"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultCalories: number;
  defaultProteinGrams: number;
};

export default function CarnivoreMacroCalculatorForm({
  defaultCalories,
  defaultProteinGrams,
}: Props) {
  const router = useRouter();

  const [calories, setCalories] = useState(defaultCalories);
  const [proteinGrams, setProteinGrams] = useState(defaultProteinGrams);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/nutrition/carnivore-macro-calculator?calories=${calories}&proteinGrams=${proteinGrams}`
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

      <button type="submit">Calculate</button>
    </form>
  );
}
