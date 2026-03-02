export type Sex = "male" | "female";

export type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "very"
  | "extra";

export type Input = {
  sex: Sex;
  age: number;
  height: number; // cm
  weight: number; // kg
  activity: ActivityLevel;
};
