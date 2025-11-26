"use client";

interface InputFieldProps {
  label: string;
  type?: "text" | "number";
  placeholder?: string;
  value?: number | string;
  onChange?: (value: string) => void;
}

export function InputField({
  label,
  type = "number",
  placeholder,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm text-neutral-700">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10 transition text-sm"
      />
    </div>
  );
}
