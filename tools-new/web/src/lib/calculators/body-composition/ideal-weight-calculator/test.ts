import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("ideal-weight-calculator", () => {
  it("returns ideal weight for valid input", () => {
    const result = calculator({
      heightCm: 180,
      sex: "male",
    });

    expect(result).toBeGreaterThan(0);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      heightCm: 140,
      sex: "male",
    });

    expect(result).toBeNull();
  });
});
