import CalculatorLayout from "@/components/CalculatorLayout";

export default function VO2MaxPage() {
  return (
    <CalculatorLayout
      category="Running"
      title="Running VO2 Max"
      description="Use distance and time to approximate VO2 max and aerobic readiness."
      fields={[
        {
          name: "distance",
          label: "Distance (km)",
          type: "number",
          min: 0.1,
          step: 0.1,
          required: true,
        },
        {
          name: "time",
          label: "Time (minutes)",
          type: "number",
          min: 1,
          step: 1,
          required: true,
        },
      ]}
    />
  );
}
