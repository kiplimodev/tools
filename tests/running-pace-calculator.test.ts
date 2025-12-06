import { describe, expect, test } from "vitest";
import { getTool } from "../registry/getTool";

describe("running pace calculator", () => {
  test("calculates pace and speed for 10 km in 50 minutes", () => {
    const calculate = getTool("running-pace-calculator");

    const result = calculate({
      distance: 10,
      unit: "km",
      time: "00:50:00",
    });

    expect(result.pacePerKm).toBe("5:00");
    expect(result.pacePerMile).toBe("8:02");
    expect(result.speedKmh).toBeCloseTo(12);
    expect(result.speedMph).toBeCloseTo(7.46);
  });
});
