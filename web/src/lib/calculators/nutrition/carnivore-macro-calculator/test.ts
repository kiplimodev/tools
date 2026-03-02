import { describe, it, expect } from "vitest";
import { calculator } from "./index";

const base = {
  sex: "male" as const,
  age: 30,
  weightKg: 80,
  heightCm: 178,
  activityLevel: "moderate" as const,
  goal: "maintain" as const,
};

describe("carnivore-macro-calculator", () => {
  it("returns macros for a valid male maintain input", () => {
    const result = calculator(base);
    expect(result).not.toBeNull();
    expect(result!.carbsG).toBe(0);
    expect(result!.proteinG).toBeGreaterThan(0);
    expect(result!.fatG).toBeGreaterThan(0);
    expect(result!.calories).toBeGreaterThan(1000);
  });

  it("fat-loss goal has higher protein and lower calories than maintain", () => {
    const maintain = calculator(base)!;
    const lose = calculator({ ...base, goal: "lose" })!;
    expect(lose.proteinG).toBeGreaterThan(maintain.proteinG);
    expect(lose.calories).toBeLessThan(maintain.calories);
  });

  it("returns null for missing weight", () => {
    const result = calculator({ ...base, weightKg: 0 });
    expect(result).toBeNull();
  });
});
