export type Input = {
  /** Current average daily steps */
  currentStepsPerDay: number;

  /** Desired increase percentage (e.g. 10 = +10%) */
  increasePercent: number;
};
