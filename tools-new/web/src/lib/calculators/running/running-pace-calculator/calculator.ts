import type { Input } from "./types";

export const calculator = (input: Input): number | null => {
  const { distanceMeters, timeSeconds } = input;

  if (distanceMeters <= 0 || timeSeconds <= 0) {
    return null;
  }

  const kilometers = distanceMeters / 1000;
  return timeSeconds / kilometers;
};
