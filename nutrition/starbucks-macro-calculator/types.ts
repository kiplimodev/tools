export type DrinkSize = "tall" | "grande" | "venti" | "trenta";

export type MilkOption =
  | "whole"
  | "two_percent"
  | "nonfat"
  | "almond"
  | "oat"
  | "soy";

export interface OrderItemInput {
  id: string;
  size: DrinkSize;
  milk?: MilkOption;
  customPumps?: number;
  quantity?: number;
}

export interface CalculatorInput {
  items: OrderItemInput[];
}

export interface CalculatedItem {
  id: string;
  size: DrinkSize;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  quantity: number;
}

export interface CalculatorOutput {
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  items: CalculatedItem[];
}
