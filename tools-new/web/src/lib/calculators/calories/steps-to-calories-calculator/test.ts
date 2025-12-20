// src/lib/calculators/calories/steps-to-calories-calculator/test.ts

import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("steps-to-calories-calculator", () => {
  it("returns calories for valid input", () => {
    const result = calculator({
      steps: 10000,
      weightKg: 70,
    });

    expect(result).toBeTypeOf("number");
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      steps: 0,
      weightKg: 70,
    });

    expect(result).toBeNull();
  });
});
