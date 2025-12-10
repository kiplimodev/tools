export interface CalculatorInput {
  dailyProteinTarget: number; // grams per day
  dietaryProteinIntake: number; // grams from food per day
  proteinPerScoop: number; // grams of protein per scoop
  caloriesPerScoop?: number; // kcal per scoop
  bagSizeGrams?: number; // total grams of powder in the bag
}

export interface CalculatorOutput {
  requiredSupplementProtein: number;
  scoopsPerDay: number;
  caloriesFromProteinPowder: number;
  weeklyScoops: number;
  weeklyProteinFromPowder: number;
  daysPerBag: number;
  needsSupplement: boolean;
}
