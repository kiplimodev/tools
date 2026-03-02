export type Input = {
  sex: "male" | "female";
  age: number;
  weightKg: number;
  heightCm: number;
  activityLevel: "sedentary" | "light" | "moderate" | "very" | "extra";
  goal: "lose" | "maintain" | "gain";
};

export type Output = {
  calories: number;
  proteinG: number;
  fatG: number;
  carbsG: 0;
};
