import { calculator } from "@/lib/calculators/running/interval-calculator";

type Input = {
  runSeconds: number;
  restSeconds: number;
  repeats: number;
};

type Result = {
  totalSeconds: number;
  totalMinutes: number;
};

export function getIntervalWorkout(input: Input): Result | null {
  const totalSeconds = calculator(input);

  if (totalSeconds === null) return null;

  return {
    totalSeconds,
    totalMinutes: totalSeconds / 60,
  };
}
