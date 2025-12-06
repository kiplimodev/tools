import assert from "node:assert/strict";
import test from "node:test";

import { calculateRunningPace } from "./pace.ts";

test("calculates pace and speed for a 10k in 50 minutes", () => {
  const result = calculateRunningPace(10, 50);
  assert.equal(result.pacePerKm, "5:00 min");
  assert.equal(result.pacePerMile, "8:03 min");
  assert.equal(result.speedKmh, 12);
  assert.equal(result.speedMph, 7.46);
});

test("rounds seconds up when they hit 60", () => {
  const result = calculateRunningPace(1, 3.999);
  assert.equal(result.pacePerKm, "4:00 min");
});

test("handles faster efforts with two decimal speeds", () => {
  const result = calculateRunningPace(5, 18.5);
  assert.equal(result.speedKmh, 16.22);
  assert.equal(result.speedMph, 10.08);
});
