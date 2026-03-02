import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("fat-intake-calculator", () => {
  it("returns minimum fat intake for valid input", () => {
    expect(calculator({ weight: 80, goal: "minimum" })).toBe(48);
  });

  it("returns moderate fat intake for valid input", () => {
    expect(calculator({ weight: 70, goal: "moderate" })).toBe(56);
  });

  it("returns high fat intake for valid input", () => {
    expect(calculator({ weight: 90, goal: "high" })).toBe(90);
  });

  it("returns null for zero weight", () => {
    expect(calculator({ weight: 0, goal: "moderate" })).toBeNull();
  });
});
