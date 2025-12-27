"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import WeightKgInput from "@/components/inputs/WeightKgInput";
import NumberInput from "@/components/inputs/NumberInput";

type Props = {
  defaultStartWeight: number;
  defaultStartBodyFat: number;
  defaultEndWeight: number;
  defaultEndBodyFat: number;
};

export default function BodyRecompositionCalculatorForm({
  defaultStartWeight,
  defaultStartBodyFat,
  defaultEndWeight,
  defaultEndBodyFat,
}: Props) {
  const router = useRouter();

  const [startWeight, setStartWeight] = useState(defaultStartWeight);
  const [startBodyFat, setStartBodyFat] = useState(defaultStartBodyFat);
  const [endWeight, setEndWeight] = useState(defaultEndWeight);
  const [endBodyFat, setEndBodyFat] = useState(defaultEndBodyFat);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/body-composition/body-recomposition-calculator?startWeight=${startWeight}&startBodyFat=${startBodyFat}&endWeight=${endWeight}&endBodyFat=${endBodyFat}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <WeightKgInput
        value={startWeight}
        onChange={setStartWeight}
      />

      <NumberInput
        label="Starting body fat (%)"
        value={startBodyFat}
        onChange={setStartBodyFat}
        step={0.1}
        min={0}
      />

      <WeightKgInput
        value={endWeight}
        onChange={setEndWeight}
      />

      <NumberInput
        label="Ending body fat (%)"
        value={endBodyFat}
        onChange={setEndBodyFat}
        step={0.1}
        min={0}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
