import assert from "node:assert/strict";
import test from "node:test";
import {
  calculateCreatine,
  CreatineInput,
} from "./creatine-calculator";

test("maintenance dose", () => {
  const input: CreatineInput = {
    weight: 80,
    protocol: "maintenance",
  };

  assert.deepEqual(calculateCreatine(input), {
    dailyDose: 2,
  });
});

test("loading dose", () => {
  const input: CreatineInput = {
    weight: 80,
    protocol: "loading",
  };

  assert.deepEqual(calculateCreatine(input), {
    dailyDose: 2,
    loadingDose: 24,
  });
});

test("invalid weight", () => {
  const input: CreatineInput = {
    weight: 0,
    protocol: "maintenance",
  };

  assert.equal(calculateCreatine(input), null);
});
