export interface CooperTestResult {
  vo2max: number;
  category: string;
}

const cooperCategory = (distanceMeters: number): string => {
  if (distanceMeters >= 3200) return "Excellent";
  if (distanceMeters >= 2800) return "Very Good";
  if (distanceMeters >= 2400) return "Good";
  if (distanceMeters >= 2000) return "Average";
  return "Below Average";
};

export function cooperTest(distanceMeters: number): CooperTestResult {
  const vo2max = (distanceMeters - 504.9) / 44.73;
  return {
    vo2max: parseFloat(vo2max.toFixed(1)),
    category: cooperCategory(distanceMeters),
  };
}
