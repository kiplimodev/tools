export type Input = {
  sex: "male" | "female";
  age: number;
  height: number; // cm
  weight: number; // kg
  activity: "sedentary" | "light" | "moderate" | "very" | "extra";
  rate: "conservative" | "standard" | "aggressive";
};
