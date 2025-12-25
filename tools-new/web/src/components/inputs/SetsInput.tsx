"use client";

import NumberInput from "./NumberInput";

type SetsInputProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function SetsInput({ value, onChange }: SetsInputProps) {
  return (
    <NumberInput
      label="Sets"
      value={value}
      min={1}
      step={1}
      onChange={onChange}
    />
  );
}
