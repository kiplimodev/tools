import Link from "next/link";
import { activityLevels, calculateTdee, ActivityLevelKey } from "@/lib/calculators/nutrition/tdee";

export const metadata = {
  title: "TDEE Calculator | Denstar Fitness Tools",
  description: "Estimate total daily energy expenditure using the Mifflin-St Jeor equation.",
};

type ParamValue = string | string[] | undefined;

interface TdeeSearchParams {
  sex?: ParamValue;
  weight?: ParamValue;
  height?: ParamValue;
  age?: ParamValue;
  activity?: ParamValue;
}

const defaultActivity: ActivityLevelKey = "moderate";

export default function Page({ searchParams }: { searchParams?: TdeeSearchParams }) {
  const getParam = (value?: ParamValue) => (Array.isArray(value) ? value[0] : value);

  const sex = getParam(searchParams?.sex) === "female" ? "female" : "male";
  const weight = getParam(searchParams?.weight);
  const height = getParam(searchParams?.height);
  const age = getParam(searchParams?.age);
  const activityLevel = getParam(searchParams?.activity) ?? defaultActivity;

  const weightValue = weight ? Number(weight) : null;
  const heightValue = height ? Number(height) : null;
  const ageValue = age ? Number(age) : null;

  const hasValues =
    weightValue !== null &&
    heightValue !== null &&
    ageValue !== null &&
    Number.isFinite(weightValue) &&
    Number.isFinite(heightValue) &&
    Number.isFinite(ageValue) &&
    weightValue > 0 &&
    heightValue > 0 &&
    ageValue > 0;
  const activity = activityLevels.find((level) => level.key === activityLevel);

  const result =
    hasValues && activity
      ? calculateTdee({
          sex,
          weightKg: weightValue!,
          heightCm: heightValue!,
          age: ageValue!,
          activityLevel: activity.key,
        })
      : null;

  return (
    <main className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-3">
        <div className="inline-flex rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700">
          Nutrition
        </div>
        <h1 className="text-4xl font-semibold tracking-tight">TDEE Calculator</h1>
        <p className="text-lg text-zinc-600">
          Estimate your total daily energy expenditure using the Mifflin-St Jeor equation.
          Results update instantly when you submit the form.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm" method="GET">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-zinc-800">Sex</span>
              <select
                name="sex"
                defaultValue={sex}
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-zinc-800">Age</span>
              <input
                type="number"
                name="age"
                min="10"
                max="100"
                defaultValue={age ?? ""}
                placeholder="30"
                required
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-zinc-800">Weight (kg)</span>
              <input
                type="number"
                name="weight"
                step="0.1"
                min="20"
                max="250"
                defaultValue={weight ?? ""}
                placeholder="70"
                required
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-zinc-800">Height (cm)</span>
              <input
                type="number"
                name="height"
                step="0.1"
                min="120"
                max="220"
                defaultValue={height ?? ""}
                placeholder="175"
                required
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200"
              />
            </label>
          </div>

          <label className="space-y-2">
            <span className="text-sm font-medium text-zinc-800">Activity level</span>
            <select
              name="activity"
              defaultValue={activityLevel}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200"
            >
              {activityLevels.map((level) => (
                <option key={level.key} value={level.key}>
                  {level.label} ({level.multiplier}x)
                </option>
              ))}
            </select>
            <p className="text-sm text-zinc-500">
              {activity?.description ?? "Pick the option that matches your weekly training volume."}
            </p>
          </label>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Calculate TDEE
          </button>
          <p className="text-sm text-zinc-500">
            Need imperial units? Convert lbs to kg by dividing by 2.205 and inches to cm by multiplying by 2.54.
          </p>
        </form>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">Results</h2>
          <div className="space-y-3 text-sm text-zinc-600">
            <p>
              Your basal metabolic rate (BMR) is the calories you burn at rest before any activity.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                <p className="text-xs uppercase tracking-wide text-zinc-500">Basal metabolic rate</p>
                <p className="text-2xl font-semibold text-zinc-900">
                  {result ? `${result.bmr.toLocaleString()} kcal` : "—"}
                </p>
              </div>
              <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                <p className="text-xs uppercase tracking-wide text-zinc-500">Total daily energy expenditure</p>
                <p className="text-2xl font-semibold text-zinc-900">
                  {result ? `${result.tdee.toLocaleString()} kcal` : "—"}
                </p>
              </div>
            </div>
            {!result && (
              <p className="text-sm text-zinc-500">
                Enter your details and submit to estimate your daily maintenance calories.
              </p>
            )}
            <p className="text-xs text-zinc-500">
              Calculation uses the Mifflin-St Jeor equation multiplied by your activity factor.
            </p>
          </div>
          <div className="rounded-xl bg-zinc-50 p-4 text-sm text-zinc-600">
            <p className="font-semibold text-zinc-800">Next steps</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Use TDEE to set calorie targets for fat loss, maintenance, or muscle gain.</li>
              <li>Pair with a macro calculator to split calories across protein, carbs, and fats.</li>
              <li>
                Explore more tools on the <Link href="/tools/running/running-pace-calculator" className="font-medium text-zinc-900 underline">Running Pace Calculator</Link> to plan cardio sessions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
