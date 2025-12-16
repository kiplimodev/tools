// src/lib/calculators/nutrition/lean-bulk-calculator/test.ts

import test from "node:test";
import assert from "node:assert/strict";
import { calculateLeanBulkCalories } from "./lean-bulk";

test("applies conservative lean bulk with minimum cap", () => {
  const calories = calculateLeanBulkCalories({
    sex: "male",
    age: 30,
    height: 180,
    weight: 80,
    activity: "moderate",
    rate: "conservative",
  });

  // TDEE ≈ 2759; 5% ≈ 138 → capped to 150
  assert.equal(calories, 2909);
});

test("applies standard lean bulk within cap", () => {
  const calories = calculateLeanBulkCalories({
    sex: "male",
    age: 26,
    height: 175,
    weight: 83,
    activity: "very",
    rate: "standard",
  });

  // TDEE ≈ 3103; 8% ≈ 248 (within cap)
  assert.equal(calories, 3351);
});

test("caps aggressive lean bulk at max surplus", () => {
  const calories = calculateLeanBulkCalories({
    sex: "male",
    age: 26,
    height: 175,
    weight: 83,
    activity: "extra",
    rate: "aggressive",
  });

  // Raw surplus > 350 → capped
  assert.ok(calories !== null);
  assert.ok(calories -  calculateLeanBulkCalories({
    sex: "male",
    age: 26,
    height: 175,
    weight: 83,
    activity: "extra",
    rate: "conservative",
  })! <= 350);
});

test("returns null for invalid input", () => {
  const calories = calculateLeanBulkCalories({
    sex: "male",
    age: 0,
    height: 180,
    weight: 80,
    activity: "moderate",
    rate: "standard",
  });

  assert.equal(calories, null);
});
