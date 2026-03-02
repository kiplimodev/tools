import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("training-volume-calculator", () => {
  it("returns volume for single exercise mode", () => {
    const result = calculator({ sets: 3, reps: 10, weightKg: 60 });
    expect(result).not.toBeNull();
    expect(result!.totalVolume).toBe(1800);
    expect(result!.volumePerSet).toBe(600);
  });

  it("returns total volume for multi-exercise mode", () => {
    const result = calculator({
      exercises: [
        { name: "Squat", sets: 3, reps: 5, weightKg: 100 },
        { name: "Bench", sets: 3, reps: 8, weightKg: 80 },
      ],
    });
    expect(result).not.toBeNull();
    expect(result!.totalVolume).toBe(3420);
    expect(result!.exerciseVolumes).toHaveLength(2);
  });

  it("returns null for empty input", () => {
    expect(calculator({})).toBeNull();
  });
});
