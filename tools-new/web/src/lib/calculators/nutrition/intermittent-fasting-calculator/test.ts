import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("intermittent-fasting-calculator", () => {
  it("returns fasting hours for valid window", () => {
    const result = calculator({
      startHour: 12,
      endHour: 20,
    });

    expect(result).toBe(16);
  });

  it("returns null for invalid hours", () => {
    const result = calculator({
      startHour: -1,
      endHour: 25,
    });

    expect(result).toBeNull();
  });
});
