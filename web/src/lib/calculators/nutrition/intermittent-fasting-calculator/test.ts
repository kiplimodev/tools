// src/lib/calculators/nutrition/intermittent-fasting-calculator/test.ts

import test from "node:test";
import assert from "node:assert/strict";
import { calculateIntermittentFasting } from "./intermittent-fasting";

test("calculates 16:8 fasting with 3 meals", () => {
  const result = calculateIntermittentFasting({
    protocol: "16:8",
    dailyCalories: 2400,
    meals: 3,
  });

  assert.deepEqual(result, {
    fastingHours: 16,
    eatingHours: 8,
    caloriesPerMeal: 800,
  });
});

test("calculates OMAD correctly", () => {
  const result = calculateIntermittentFasting({
    protocol: "omad",
    dailyCalories: 2000,
    meals: 1,
  });

  assert.deepEqual(result, {
    fastingHours: 23,
    eatingHours: 1,
    caloriesPerMeal: 2000,
  });
});

test("returns null for invalid inputs", () => {
  const result = calculateIntermittentFasting({
    protocol: "16:8",
    dailyCalories: 0,
    meals: 3,
  });

  assert.equal(result, null);
});
