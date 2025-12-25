"use client";

type SexInputProps = {
  value: "male" | "female";
  onChange: (value: "male" | "female") => void;
};

export default function SexInput({ value, onChange }: SexInputProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium">Sex</label>
      <select
        className="w-full rounded border px-2 py-1"
        value={value}
        onChange={(e) => onChange(e.target.value as "male" | "female")}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
}
