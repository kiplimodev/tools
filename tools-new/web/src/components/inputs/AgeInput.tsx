"use client";

import NumberInput from "./NumberInput";

type AgeInputProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function AgeInput({ value, onChange }: AgeInputProps) {
  return (
    <NumberInput
      label="Age"
      value={value}
      onChange={onChange}
      min={1}
      step={1}
    />
  );
}
