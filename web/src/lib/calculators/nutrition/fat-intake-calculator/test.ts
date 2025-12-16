// src/lib/calculators/nutrition/fat-intake-calculator/test.ts

import test from "node:test";
import assert from "node:assert/strict";
import { calculateFatIntake } from "./fat-intake";

test("calculates minimum fat intake", () => {
  const grams = calculateFatIntake({
    weight: 80,
    goal: "minimum",
  });

  assert.equal(grams, 48);
});

test("calculates moderate fat intake", () => {
  const grams = calculateFatIntake({
    weight: 70,
    goal: "moderate",
  });

  assert.equal(grams, 56);
});

test("calculates high fat intake", () => {
  const grams = calculateFatIntake({
    weight: 90,
    goal: "high",
  });

  assert.equal(grams, 90);
});

test("returns null for invalid weight", () => {
  const grams = calculateFatIntake({
    weight: 0,
    goal: "moderate",
  });

  assert.equal(grams, null);
});
