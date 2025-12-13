import { describe, expect, test } from "vitest";
import { getCalculator } from "../registry/getTool";

describe("running calories calculator", () => {
  test("estimates calories burned using speed-based MET lookup", () => {
    const calculate = getCalculator("running-calories-burned-calculator");

    const result = calculate({
      weightKg: 70,
      durationMinutes: 30,
      speedKmh: 10,
    });

    expect(result.metValue).toBe(9.8);
    expect(result.caloriesBurned).toBe(343);
  });

  test("caps MET for very high speeds", () => {
    const calculate = getCalculator("running-calories-burned-calculator");

    const result = calculate({
      weightKg: 70,
      durationMinutes: 30,
      speedKmh: 20,
    });

    expect(result.metValue).toBe(16.0);
  });
});
