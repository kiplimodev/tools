import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("ideal weight calculator", () => {
  it("calculates ideal weight for male", () => {
    const result = calculator({
      heightCm: 180,
      sex: "male",
    });

    expect(result).toBeCloseTo(75.2, 1);
  });

  it("returns null for invalid height", () => {
    const result = calculator({
      heightCm: 0,
      sex: "female",
    });

    expect(result).toBeNull();
  });
});
