import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("plate-weight-calculator", () => {
  it("returns plates for a clean 40kg per side", () => {
    const result = calculator({ targetPerSideKg: 40 });
    expect(result).not.toBeNull();
    expect(result!.totalLoaded).toBe(40);
    expect(result!.missingWeight).toBeNull();
  });

  it("returns null for zero target", () => {
    expect(calculator({ targetPerSideKg: 0 })).toBeNull();
  });
});
