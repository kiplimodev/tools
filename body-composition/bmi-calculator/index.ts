/**
 * BMI Calculator
 * id: bmi-calculator
 * category: body-composition
 */

export const meta = {
  id: "bmi-calculator",
  name: "BMI Calculator",
  category: "body-composition",
};

/**
 * Calculate BMI + category
 */
export function run(inputs: { weightKg: number; heightCm: number }) {
  const { weightKg, heightCm } = inputs;

  const heightM = heightCm / 100;
  const bmi = Number((weightKg / (heightM * heightM)).toFixed(2));

  let category = "Unknown";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  return {
    bmi,
    category,
  };
}
