import { describe, expect, test } from "vitest";
import { getTool } from "../registry/getTool";

describe("running calories calculator", () => {
  test("estimates calories burned from MET formula", () => {
    const calculate = getTool("running-calories-burned-calculator");

    const result = calculate({
      weightKg: 70,
      durationMinutes: 30,
      met: 9,
    });

    expect(result.caloriesBurned).toBeCloseTo(315);
  });
});
