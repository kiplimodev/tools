import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("rpe-calculator", () => {
  it("estimates 1RM from a set (Mode A)", () => {
    const result = calculator({ weightKg: 100, reps: 3, rpe: 9 });
    expect(result).not.toBeNull();
    expect(result!.estimated1RM).not.toBeNull();
    expect(result!.percent1RM).not.toBeNull();
  });

  it("predicts working weight (Mode B)", () => {
    const result = calculator({ estimated1RM: 200, targetReps: 3, targetRpe: 8 });
    expect(result).not.toBeNull();
    expect(result!.predictedWeight).not.toBeNull();
  });

  it("returns null when no valid mode supplied", () => {
    expect(calculator({})).toBeNull();
  });
});
