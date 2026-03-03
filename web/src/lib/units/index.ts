/**
 * Unit conversion constants for the CalculatorLayout unit toggle.
 *
 * Convention:
 *   - URL params always store SI values (kg, cm, km)
 *   - `toSI`: multiply the user-entered display value by this to get SI
 *   - `fromSI`: multiply the SI value by this to get the display value (= 1/toSI)
 *   - label, step, placeholder adapt to the selected unit system
 */
export const UNIT_CONVERSIONS = {
  weight: {
    metric:   { label: "kg",  step: 0.1,   placeholder: "70",   toSI: 1 },
    imperial: { label: "lbs", step: 0.5,   placeholder: "154",  toSI: 0.453592 },
  },
  height: {
    metric:   { label: "cm",  step: 0.5,   placeholder: "175",  toSI: 1 },
    imperial: { label: "in",  step: 0.25,  placeholder: "69",   toSI: 2.54 },
  },
  distance: {
    metric:   { label: "km",  step: 0.1,   placeholder: "10",   toSI: 1 },
    imperial: { label: "mi",  step: 0.01,  placeholder: "6.2",  toSI: 1.60934 },
  },
  shortDistance: {
    metric:   { label: "cm",  step: 0.5,   placeholder: "80",   toSI: 1 },
    imperial: { label: "in",  step: 0.25,  placeholder: "31.5", toSI: 2.54 },
  },
} as const;

export type UnitGroup = keyof typeof UNIT_CONVERSIONS;
export type UnitSystem = "metric" | "imperial";
