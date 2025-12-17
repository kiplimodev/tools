import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("interval calculator", () => {
  it("returns total workout time", () => {
    const result = calculator({
      runSeconds: 60,
      restSeconds: 30,
      repeats: 5,
    });

    expect(result).toBe(60 * 5 + 30 * 4);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      runSeconds: 0,
      restSeconds: 30,
      repeats: 5,
    });

    expect(result).toBeNull();
  });
});
