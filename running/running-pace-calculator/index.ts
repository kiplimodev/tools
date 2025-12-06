export const meta = {
  id: "running-pace-calculator",
  name: "Running Pace Calculator",
  category: "running",
};

export function run(inputs: { distanceKm: number; timeMinutes: number }) {
  const { distanceKm, timeMinutes } = inputs;

  const pace = timeMinutes / distanceKm; // min per km
  const minutes = Math.floor(pace);
  const seconds = Math.round((pace - minutes) * 60);

  return {
    pacePerKm: `${minutes}:${seconds.toString().padStart(2, "0")}`,
  };
}
