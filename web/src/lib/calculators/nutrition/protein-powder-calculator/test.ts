import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("protein-powder-calculator", () => {
  it("returns correct scoop count for a gap", () => {
    expect(calculator({ proteinTarget: 150, proteinFromFood: 100, proteinPerScoop: 25 })).toBe(2);
  });

  it("returns 0 when food already meets target", () => {
    expect(calculator({ proteinTarget: 100, proteinFromFood: 120, proteinPerScoop: 25 })).toBe(0);
  });

  it("returns null for zero protein target", () => {
    expect(calculator({ proteinTarget: 0, proteinFromFood: 0, proteinPerScoop: 25 })).toBeNull();
  });

  it("returns null for zero scoop size", () => {
    expect(calculator({ proteinTarget: 150, proteinFromFood: 0, proteinPerScoop: 0 })).toBeNull();
  });
});
