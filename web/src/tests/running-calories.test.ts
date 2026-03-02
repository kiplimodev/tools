import { describe, expect, test } from "vitest";
import { estimateRunningCalories } from "../lib/calculators/running/calories";

describe("running calories calculator", () => {
  test("estimates calories burned", () => {
    const result = estimateRunningCalories(5, 30, 70);
    expect(result.calories).toBeGreaterThan(0);
    expect(result.met).toBeGreaterThan(0);
  });
});
