export interface FatLossResult {
  weeklyLossKg: number;
  weeksRequired: number;
}

export function fatLossTime(currentWeightKg: number, targetWeightKg: number, dailyDeficit: number): FatLossResult {
  const totalKgToLose = currentWeightKg - targetWeightKg;
  const kgPerWeek = (dailyDeficit * 7) / 7700;
  const weeksRequired = totalKgToLose > 0 && kgPerWeek > 0 ? totalKgToLose / kgPerWeek : 0;
  return {
    weeklyLossKg: parseFloat(kgPerWeek.toFixed(2)),
    weeksRequired: parseFloat(weeksRequired.toFixed(1)),
  };
}
