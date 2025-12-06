export interface MaxTestResult {
  pushupLevel: string;
  pullupLevel: string;
}

const pushupThresholds = [10, 20, 35, 50];
const pullupThresholds = [2, 6, 12, 18];
const labels = ["Beginner", "Novice", "Intermediate", "Advanced", "Elite"];

const levelFromReps = (reps: number, thresholds: number[]): string => {
  if (reps >= thresholds[3]) return labels[4];
  if (reps >= thresholds[2]) return labels[3];
  if (reps >= thresholds[1]) return labels[2];
  if (reps >= thresholds[0]) return labels[1];
  return labels[0];
};

export function maxTest(pushups: number, pullups: number): MaxTestResult {
  return {
    pushupLevel: levelFromReps(pushups, pushupThresholds),
    pullupLevel: levelFromReps(pullups, pullupThresholds),
  };
}
