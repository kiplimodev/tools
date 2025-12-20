import { calculator } from "@/lib/calculators/calories/swimming-calories-calculator";

export const getSwimmingCalories = () => {
  return calculator({
    weightKg: 70,
    durationMinutes: 30,
    met: 8,
  });
};
