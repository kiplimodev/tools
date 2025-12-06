export interface SkillProgressionResult {
  stage: string;
  recommendation: string;
}

export function skillProgression(skill: "muscle-up" | "handstand" | "planche", holdSeconds: number): SkillProgressionResult {
  const stages = ["Foundation", "Strength", "Control", "Mastery"];
  let stage = stages[0];
  let recommendation = "Build base strength and consistency.";

  if (holdSeconds >= 25) {
    stage = stages[3];
    recommendation = "Practice full skill variations and refine form.";
  } else if (holdSeconds >= 15) {
    stage = stages[2];
    recommendation = "Integrate skill-specific drills and longer holds.";
  } else if (holdSeconds >= 8) {
    stage = stages[1];
    recommendation = "Increase intensity with progressions and added tempo.";
  }

  const skillNotes: Record<typeof skill, string> = {
    "muscle-up": "Combine explosive pulling with transition drills.",
    handstand: "Work on line drills, wrist prep, and wall balance.",
    planche: "Use tuck and straddle progressions with scapular strength work.",
  };

  return {
    stage,
    recommendation: `${recommendation} ${skillNotes[skill]}`,
  };
}
