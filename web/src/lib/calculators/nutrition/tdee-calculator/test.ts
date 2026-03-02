import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("tdee-calculator", () => {
  it("returns TDEE for moderate activity male", () => {
    const result = calculator({
      sex: "male",
      age: 30,
      height: 180,
      weight: 80,
      activity: "moderate",
    });
    expect(result).not.toBeNull();
    expect(result).toBe(2759);
  });

  it("returns TDEE for light activity female", () => {
    const result = calculator({
      sex: "female",
      age: 30,
      height: 165,
      weight: 65,
      activity: "light",
    });
    expect(result).not.toBeNull();
    expect(typeof result).toBe("number");
  });

  it("returns null for zero age", () => {
    expect(
      calculator({ sex: "male", age: 0, height: 180, weight: 80, activity: "moderate" })
    ).toBeNull();
  });
});
