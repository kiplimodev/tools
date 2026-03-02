export type Input = {
  distance: number;        // km or mi depending on distanceUnit
  distanceUnit: "km" | "mi";
  timeSeconds: number;     // total time in seconds
};
