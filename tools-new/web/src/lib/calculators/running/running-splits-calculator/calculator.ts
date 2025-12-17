import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

export const calculator: CalculatorV1<Input> = ({
  distanceMeters,
  timeSeconds,
  splitMeters,
}) => {
  if (
    distanceMeters <= 0 ||
    timeSeconds <= 0 ||
    splitMeters <= 0 ||
    splitMeters > distanceMeters
  ) {
    return null;
  }

  const pacePerMeter = timeSeconds / distanceMeters;
  return pacePerMeter * splitMeters;
};
