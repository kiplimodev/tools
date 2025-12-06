export type BmiInput = {
  weightKg: number;
  heightCm: number;
};

export type BmiResult = {
  bmi: number;
  category: string;
};

const categories: { min: number; max: number; label: string }[] = [
  { min: 0, max: 18.5, label: "Underweight" },
  { min: 18.5, max: 25, label: "Normal weight" },
  { min: 25, max: 30, label: "Overweight" },
  { min: 30, max: Number.POSITIVE_INFINITY, label: "Obesity" },
];

function assertPositiveNumber(value: unknown, field: string): number {
  const numeric = typeof value === "string" ? Number(value) : (value as number);
  if (!Number.isFinite(numeric) || numeric <= 0) {
    throw new Error(`${field} must be a positive number`);
  }
  return numeric;
}

export function calculateBmi(input: Partial<BmiInput>): BmiResult {
  const weightKg = assertPositiveNumber(input.weightKg, "weightKg");
  const heightCm = assertPositiveNumber(input.heightCm, "heightCm");
  const heightM = heightCm / 100;
  const bmiRaw = weightKg / (heightM * heightM);
  const bmi = Number(bmiRaw.toFixed(2));
  const category = categories.find(({ min, max }) => bmi >= min && bmi < max)?.label ?? "Unknown";

  return { bmi, category };
}
