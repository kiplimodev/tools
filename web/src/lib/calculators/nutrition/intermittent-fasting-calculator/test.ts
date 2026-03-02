import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("intermittent-fasting-calculator", () => {
  it("returns correct windows for 16:8 with 3 meals", () => {
    const result = calculator({ protocol: "16:8", dailyCalories: 2400, meals: 3 });
    expect(result).not.toBeNull();
    expect(result!.fastingHours).toBe(16);
    expect(result!.eatingHours).toBe(8);
    expect(result!.caloriesPerMeal).toBe(800);
  });

  it("returns correct windows for OMAD", () => {
    const result = calculator({ protocol: "omad", dailyCalories: 2000, meals: 1 });
    expect(result).not.toBeNull();
    expect(result!.fastingHours).toBe(23);
    expect(result!.eatingHours).toBe(1);
    expect(result!.caloriesPerMeal).toBe(2000);
  });

  it("returns null for zero calories", () => {
    expect(calculator({ protocol: "16:8", dailyCalories: 0, meals: 3 })).toBeNull();
  });
});
