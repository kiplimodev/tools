import assert from "node:assert/strict";
import test from "node:test";

import { calculateTdee } from "./tdee.ts";

test("computes TDEE for a moderately active male", () => {
  const result = calculateTdee({
    sex: "male",
    weightKg: 75,
    heightCm: 180,
    age: 30,
    activityLevel: "moderate",
  });

  assert.equal(result.bmr, 1730);
  assert.equal(result.tdee, 2682);
});

test("computes TDEE for a lightly active female", () => {
  const result = calculateTdee({
    sex: "female",
    weightKg: 60,
    heightCm: 165,
    age: 28,
    activityLevel: "light",
  });

  assert.equal(result.bmr, 1330);
  assert.equal(result.tdee, 1829);
});

test("throws on invalid activity level", () => {
  assert.throws(() =>
    calculateTdee({
      sex: "male",
      weightKg: 70,
      heightCm: 175,
      age: 25,
      // @ts-expect-error - invalid on purpose for the test
      activityLevel: "invalid",
    }),
  );
});
