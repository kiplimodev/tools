import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("pull-up-calculator", () => {
  it("returns reps for valid input", () => {
    const result = calculator({ reps: 15 });
    expect(result).toBe(15);
  });

  it("returns null for invalid input", () => {
    const result = calculator({ reps: -3 });
    expect(result).toBeNull();
  });
});
