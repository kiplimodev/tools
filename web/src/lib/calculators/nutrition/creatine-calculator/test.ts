import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("creatine-calculator", () => {
  it("returns maintenance dose for valid input", () => {
    const result = calculator({ weight: 80, protocol: "maintenance" });
    expect(result).not.toBeNull();
    expect(result!.dailyDose).toBe(2);
    expect(result!.loadingDose).toBeNull();
  });

  it("returns loading dose when protocol is loading", () => {
    const result = calculator({ weight: 80, protocol: "loading" });
    expect(result).not.toBeNull();
    expect(result!.dailyDose).toBe(2);
    expect(result!.loadingDose).toBe(24);
  });

  it("returns null for zero weight", () => {
    expect(calculator({ weight: 0, protocol: "maintenance" })).toBeNull();
  });
});
