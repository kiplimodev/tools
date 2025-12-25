"use client";

import NumberInput from "./NumberInput";

type WeightKgInputProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function WeightKgInput({
  value,
  onChange,
}: WeightKgInputProps) {
  return (
    <NumberInput
      label="Weight (kg)"
      value={value}
      onChange={onChange}
      min={1}
      step={0.1}
    />
  );
}
