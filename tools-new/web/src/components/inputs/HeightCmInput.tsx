"use client";

import NumberInput from "./NumberInput";

type HeightCmInputProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function HeightCmInput({
  value,
  onChange,
}: HeightCmInputProps) {
  return (
    <NumberInput
      label="Height (cm)"
      value={value}
      onChange={onChange}
      min={50}
      step={0.1}
    />
  );
}
