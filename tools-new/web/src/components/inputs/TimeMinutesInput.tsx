"use client";

import NumberInput from "./NumberInput";

type TimeMinutesInputProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function TimeMinutesInput({
  value,
  onChange,
}: TimeMinutesInputProps) {
  return (
    <NumberInput
      label="Time (minutes)"
      value={value}
      onChange={onChange}
      min={0}
      step={1}
    />
  );
}
