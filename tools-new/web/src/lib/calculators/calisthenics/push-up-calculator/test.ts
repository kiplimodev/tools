import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("push-up-calculator", () => {
  it("returns value for valid reps", () => {
    const result = calculator({ reps: 30 });
    expect(result).toBe(30);
  });

  it("returns null for invalid input", () => {
    const result = calculator({ reps: 0 });
    expect(result).toBeNull();
  });
});
