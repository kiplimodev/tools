import React, { FormEvent, useMemo, useState } from "react";
import { CalculatorInput, CalculatorOutput } from "./types";
import { calculateCore } from "./utils";

/**
 * Entry point for this calculator.
 */
export function calculate(input: CalculatorInput): CalculatorOutput {
  const hasGoal = Boolean(input.goal);
  const hasAge = typeof input.age === "number" && !Number.isNaN(input.age);

  if (!hasGoal || !hasAge) {
    return {
      recommendedSteps: 0,
      category: "unknown",
      estimatedCalories: undefined,
      deltaFromCurrent: undefined,
    };
  }

  return calculateCore(input);
}

function isReady(input: Partial<CalculatorInput>): input is CalculatorInput {
  return (
    typeof input.age === "number" &&
    !Number.isNaN(input.age) &&
    input.age > 0 &&
    (input.goal === "health" || input.goal === "weight-loss" || input.goal === "fitness")
  );
}

export default function StepsPerDayCalculator() {
  const [age, setAge] = useState<number | "">("");
  const [goal, setGoal] = useState<CalculatorInput["goal"] | "">("");
  const [weightKg, setWeightKg] = useState<number | "">("");
  const [currentSteps, setCurrentSteps] = useState<number | "">("");
  const [result, setResult] = useState<CalculatorOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const readyInput = useMemo(() => {
    const input: Partial<CalculatorInput> = {
      age: typeof age === "number" ? age : undefined,
      goal: goal || undefined,
      weightKg: typeof weightKg === "number" ? weightKg : undefined,
      currentSteps: typeof currentSteps === "number" ? currentSteps : undefined,
    };

    return isReady(input) ? input : null;
  }, [age, goal, weightKg, currentSteps]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!readyInput) {
      setResult(null);
      setError("Please provide your age and select a goal to calculate steps.");
      return;
    }

    try {
      setResult(calculate(readyInput));
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to calculate with the provided input.";
      setResult(null);
      setError(message);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="age">
            Age
          </label>
          <input
            id="age"
            name="age"
            type="number"
            className="w-full rounded border px-3 py-2"
            value={age}
            onChange={(e) => {
              const value = e.target.value;
              setAge(value === "" ? "" : Number(value));
            }}
            min={1}
            placeholder="Enter your age"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="goal">
            Goal
          </label>
          <select
            id="goal"
            name="goal"
            className="w-full rounded border px-3 py-2"
            value={goal}
            onChange={(e) => setGoal(e.target.value as CalculatorInput["goal"] | "")}
          >
            <option value="">Select a goal</option>
            <option value="health">Health</option>
            <option value="weight-loss">Weight loss</option>
            <option value="fitness">Fitness</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="weightKg">
            Weight (kg)
          </label>
          <input
            id="weightKg"
            name="weightKg"
            type="number"
            className="w-full rounded border px-3 py-2"
            value={weightKg}
            onChange={(e) => {
              const value = e.target.value;
              setWeightKg(value === "" ? "" : Number(value));
            }}
            min={1}
            step="0.1"
            placeholder="Optional"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="currentSteps">
            Current average steps
          </label>
          <input
            id="currentSteps"
            name="currentSteps"
            type="number"
            className="w-full rounded border px-3 py-2"
            value={currentSteps}
            onChange={(e) => {
              const value = e.target.value;
              setCurrentSteps(value === "" ? "" : Number(value));
            }}
            min={0}
            placeholder="Optional"
          />
        </div>

        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">
          Calculate
        </button>
      </form>

      {error && (
        <div className="rounded border border-amber-200 bg-amber-50 p-3 text-amber-800">
          <p className="font-semibold">Unable to calculate yet</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      {result && !error && (
        <div className="space-y-2 rounded border bg-white p-4 shadow">
          <h2 className="text-lg font-semibold">Recommended steps per day</h2>
          <p className="text-2xl font-bold">{result.recommendedSteps.toLocaleString()} steps</p>
          <p className="text-sm text-gray-700">Category: {result.category}</p>
          {result.estimatedCalories !== undefined && (
            <p className="text-sm text-gray-700">Estimated calories: {result.estimatedCalories} kcal</p>
          )}
          {result.deltaFromCurrent !== undefined && (
            <p className="text-sm text-gray-700">
              Difference from current: {result.deltaFromCurrent > 0 ? "+" : ""}
              {result.deltaFromCurrent.toLocaleString()} steps
            </p>
          )}
        </div>
      )}
    </div>
  );
}
