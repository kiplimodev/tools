"use client";

import NumberInput from "./NumberInput";

type RepsInputProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function RepsInput({ value, onChange }: RepsInputProps) {
  return (
    <NumberInput
      label="Reps"
      value={value}
      min={1}
      step={1}
      onChange={onChange}
    />
  );
}
