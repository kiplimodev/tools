import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("lean-bulk-calculator", () => {
  it("returns lean bulk calories for valid input", () => {
    const result = calculator({
      sex: "male",
      age: 30,
      height: 180,
      weight: 80,
      activity: "moderate",
      rate: "conservative",
    });
    expect(result).not.toBeNull();
    expect(typeof result).toBe("number");
    expect(result!).toBeGreaterThan(2000);
  });

  it("returns null for invalid age", () => {
    const result = calculator({
      sex: "male",
      age: 0,
      height: 180,
      weight: 80,
      activity: "moderate",
      rate: "standard",
    });
    expect(result).toBeNull();
  });
});
