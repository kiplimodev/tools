"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { calculateVDOT, VdotResult } from "@/lib/calculators/running/vdot";

export default function Page() {
  return (
    <CalculatorLayout<VdotResult>
      category="Running"
      title="VDOT Calculator"
      description="Estimate your VDOT and equivalent race performances."
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
      compute={({ distance, time }) => {
        if (!distance || !time) return null;
        return calculateVDOT(distance, time);
      }}
      renderResults={(res) => (
        <div className="space-y-2 text-sm">
          <p>
            <strong>VDOT:</strong> {res.vdot}
          </p>

          <div>
            <strong>Predicted Race Times</strong>
            <ul className="list-disc list-inside mt-1">
              <li>5K: {res.predictedTimes.fiveK}</li>
              <li>10K: {res.predictedTimes.tenK}</li>
              <li>Half Marathon: {res.predictedTimes.halfMarathon}</li>
            </ul>
          </div>
        </div>
      )}
    />
  );
}
