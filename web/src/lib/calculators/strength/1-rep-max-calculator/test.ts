import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("1-rep-max-calculator", () => {
  it("returns all formula estimates for valid input", () => {
    const result = calculator({ weightKg: 100, reps: 5 });
    expect(result).not.toBeNull();
    expect(typeof result!.epley).toBe("number");
    expect(typeof result!.brzycki).toBe("number");
    expect(typeof result!.lombardi).toBe("number");
    expect(typeof result!.oconner).toBe("number");
    expect(typeof result!.lander).toBe("number");
  });

  it("returns the weight itself when reps is 1", () => {
    const result = calculator({ weightKg: 120, reps: 1 });
    expect(result).not.toBeNull();
    expect(result!.epley).toBe(120);
  });

  it("returns null for zero weight", () => {
    expect(calculator({ weightKg: 0, reps: 5 })).toBeNull();
  });

  it("returns null for reps exceeding 20", () => {
    expect(calculator({ weightKg: 100, reps: 21 })).toBeNull();
  });
});
