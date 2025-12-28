import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("body fat calculator", () => {
  it("returns body fat percentage for valid input", () => {
    const result = calculator({
      bmi: 25,
      age: 30,
      sex: "male",
    });

    expect(typeof result).toBe("number");
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      bmi: 0,
      age: 30,
      sex: "male",
    });

    expect(result).toBeNull();
  });
});
