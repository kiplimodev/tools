import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("powerlifting-calculator", () => {
  it("returns DOTS, Wilks, and IPF GL for valid input", () => {
    const result = calculator({ gender: "male", bodyWeightKg: 90, squatKg: 200, benchKg: 140, deadliftKg: 250 });
    expect(result).not.toBeNull();
    expect(typeof result!.dots).toBe("number");
    expect(typeof result!.wilks).toBe("number");
    expect(typeof result!.ipfGL).toBe("number");
    expect(result!.totalKg).toBe(590);
  });

  it("returns null for zero body weight", () => {
    expect(calculator({ gender: "male", bodyWeightKg: 0, squatKg: 200, benchKg: 140, deadliftKg: 250 })).toBeNull();
  });
});
