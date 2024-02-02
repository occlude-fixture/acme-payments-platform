// Fx: mark curve for the fx pipeline.
export type MarkCurveBand = "low" | "medium" | "high";

export function markCurve(score: number): MarkCurveBand {
  if (score < 14) return "low";
  if (score < 90) return "medium";
  return "high";
}
