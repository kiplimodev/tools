import ToolLayout from "@/components/tools/ToolLayout";
import { Section } from "@/components/ui/Section";
import { InputField } from "@/components/ui/InputField";
import { ResultCard } from "@/components/ui/ResultCard";
import { calculatePace } from "@/lib/calculators/running/pace";
import { useState } from "react";

export default function RunningPaceCalculatorPage() {
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState<any>(null);

  function handleCalculate() {
    const distanceNum = parseFloat(distance);
    const timeNum = parseFloat(time);

    const r = calculatePace(distanceNum, timeNum);
    setResult(r);
  }

  return (
    <ToolLayout
      title="Running Pace Calculator"
      description="Calculate your running pace based on distance and time."
    >
      <Section title="Enter your run details">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="Distance (km)"
            value={distance}
            onChange={setDistance}
            placeholder="e.g., 5"
          />
          <InputField
            label="Time (min)"
            value={time}
            onChange={setTime}
            placeholder="e.g., 30"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-neutral-800 transition"
        >
          Calculate Pace
        </button>
      </Section>

      {result && (
        <Section title="Your pace">
          <ResultCard
            title="Pace per kilometer"
            value={result.formatted}
          />
        </Section>
      )}
    </ToolLayout>
  );
}
