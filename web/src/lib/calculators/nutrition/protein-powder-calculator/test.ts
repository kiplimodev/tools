// src/lib/calculators/nutrition/protein-powder-calculator/test.ts

import test from "node:test";
import assert from "node:assert/strict";
import { calculateProteinPowderScoops } from "./protein-powder";

test("calculates scoops when no protein eaten yet", () => {
  const scoops = calculateProteinPowderScoops({
    proteinTarget: 150,
    proteinPerScoop: 25,
  });

  assert.equal(scoops, 6);
});

test("calculates remaining scoops after food protein", () => {
  const scoops = calculateProteinPowderScoops({
    proteinTarget: 160,
    proteinFromFood: 80,
    proteinPerScoop: 32,
  });

  assert.equal(scoops, 3);
});

test("returns 0 if protein target already met", () => {
  const scoops = calculateProteinPowderScoops({
    proteinTarget: 120,
    proteinFromFood: 130,
    proteinPerScoop: 24,
  });

  assert.equal(scoops, 0);
});

test("returns null for invalid inputs", () => {
  const scoops = calculateProteinPowderScoops({
    proteinTarget: 0,
    proteinPerScoop: 25,
  });

  assert.equal(scoops, null);
});
