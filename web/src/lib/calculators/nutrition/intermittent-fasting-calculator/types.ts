export type FastingProtocol = "16:8" | "18:6" | "20:4" | "omad";

export type Input = {
  protocol: FastingProtocol;
  dailyCalories: number;
  meals: number;
};

export type Output = {
  fastingHours: number;
  eatingHours: number;
  caloriesPerMeal: number;
};
