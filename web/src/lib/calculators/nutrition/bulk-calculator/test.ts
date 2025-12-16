// src/lib/calculators/nutrition/bulk-calculator/test.ts

import test from "node:test";
import assert from "node:assert/strict";
import { calculateBulkCalories } from "./bulk";

test("calculates bulk calories with small surplus", () => {
  const calories = calculateBulkCalories({
    sex: "male",
    age: 30,
    height: 180,
    weight: 80,
    activity: "moderate",
    surplus: "small",
  });

  assert.equal(calories, 3009); // 2759 TDEE + 250
});

test("calculates bulk calories with large surplus", () => {
  const calories = calculateBulkCalories({
    sex: "female",
    age: 28,
    height: 165,
    weight: 60,
    activity: "light",
    surplus: "large",
  });

  assert.equal(calories, 2429); // 1829 TDEE + 600
});

test("returns null for invalid input", () => {
  const calories = calculateBulkCalories({
    sex: "male",
    age: 0,
    height: 180,
    weight: 80,
    activity: "moderate",
    surplus: "medium",
  });

  assert.equal(calories, null);
});
