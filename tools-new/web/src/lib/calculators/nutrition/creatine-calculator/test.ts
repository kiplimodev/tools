import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("creatine-calculator", () => {
  it("returns loading dose for valid input", () => {
    const result = calculator({
      weightKg: 80,
      protocol: "loading",
    });

    expect(result).toBeGreaterThan(0);
  });

  it("returns maintenance dose for valid input", () => {
    const result = calculator({
      weightKg: 80,
      protocol: "maintenance",
    });

    expect(result).toBeGreaterThan(0);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      weightKg: 0,
      protocol: "maintenance",
    });

    expect(result).toBeNull();
  });
});
