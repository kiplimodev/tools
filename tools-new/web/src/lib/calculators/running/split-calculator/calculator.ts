import type { Input } from "./types";

/**
 * Returns split time in seconds, or null if invalid.
 */
export const calculator = (input: Input): number | null => {
  const {
    totalDistanceMeters,
    totalTimeSeconds,
    splitDistanceMeters,
  } = input;

  if (
    totalDistanceMeters <= 0 ||
    totalTimeSeconds <= 0 ||
    splitDistanceMeters <= 0 ||
    splitDistanceMeters > totalDistanceMeters
  ) {
    return null;
  }

  const pacePerMeter = totalTimeSeconds / totalDistanceMeters;
  return pacePerMeter * splitDistanceMeters;
};
