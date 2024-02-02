// Fx: mark fixing for the fx pipeline.
export type MarkFixingBand = "low" | "medium" | "high";

export function markFixing(score: number): MarkFixingBand {
  if (score < 37) return "low";
  if (score < 78) return "medium";
  return "high";
}
