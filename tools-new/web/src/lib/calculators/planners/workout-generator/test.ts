import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("workout-generator", () => {
  it("returns a number for valid input", () => {
    const result = calculator({
      goal: "strength",
      level: "beginner",
    });

    expect(typeof result).toBe("number");
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      // @ts-expect-error
      goal: undefined,
      // @ts-expect-error
      level: undefined,
    });

    expect(result).toBeNull();
  });
});
