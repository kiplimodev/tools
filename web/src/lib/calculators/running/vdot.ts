export interface VdotResult {
  vdot: number;
  predictedTimes: {
    fiveK: string;
    tenK: string;
    halfMarathon: string;
  };
}

const formatTime = (minutes: number): string => {
  const h = Math.floor(minutes / 60);
  const m = Math.floor(minutes % 60);
  const s = Math.round((minutes - Math.floor(minutes)) * 60);
  return h > 0
    ? `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
    : `${m}:${s.toString().padStart(2, "0")}`;
};

export function calculateVDOT(
  distanceKm: number,
  timeMinutes: number
): VdotResult {
  const velocity = (distanceKm * 1000) / timeMinutes; // m/min

  const vo2 =
    -4.6 +
    0.182258 * velocity +
    0.000104 * velocity * velocity;

  const percentMax =
    0.8 +
    0.1894393 * Math.exp(-0.012778 * timeMinutes) +
    0.2989558 * Math.exp(-0.1932605 * timeMinutes);

  const vdot = vo2 / percentMax;

  const predict = (km: number) =>
    formatTime((timeMinutes / distanceKm) * km);

  return {
    vdot: Number(vdot.toFixed(1)),
    predictedTimes: {
      fiveK: predict(5),
      tenK: predict(10),
      halfMarathon: predict(21.097),
    },
  };
}
