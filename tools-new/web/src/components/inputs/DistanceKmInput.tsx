"use client";

import NumberInput from "./NumberInput";

type DistanceKmInputProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function DistanceKmInput({
  value,
  onChange,
}: DistanceKmInputProps) {
  return (
    <NumberInput
      label="Distance (km)"
      value={value}
      onChange={onChange}
      min={0}
      step={0.1}
    />
  );
}
