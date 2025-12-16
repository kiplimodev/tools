// src/lib/calculators/nutrition/tdee-calculator/test.ts

import test from "node:test";
import assert from "node:assert/strict";
import { calculateBMR, calculateTDEE } from "./tdee";

test("calculateBMR – male (Mifflin–St Jeor)", () => {
  const bmr = calculateBMR({
    sex: "male",
    age: 30,
    height: 180,
    weight: 80,
    activity: "moderate",
  });

  assert.ok(bmr !== null);
  assert.equal(Math.round(bmr), 1780);
});

test("calculateBMR – female (Mifflin–St Jeor)", () => {
  const bmr = calculateBMR({
    sex: "female",
    age: 30,
    height: 165,
    weight: 65,
    activity: "light",
  });

  assert.ok(bmr !== null);
  assert.equal(Math.round(bmr), 1370);
});

test("calculateTDEE – moderate activity male", () => {
  const tdee = calculateTDEE({
    sex: "male",
    age: 30,
    height: 180,
    weight: 80,
    activity: "moderate",
  });

  assert.equal(tdee, 2759);
});

test("calculateTDEE returns null for invalid inputs", () => {
  const tdee = calculateTDEE({
    sex: "male",
    age: 0,
    height: 180,
    weight: 80,
    activity: "moderate",
  });

  assert.equal(tdee, null);
});
