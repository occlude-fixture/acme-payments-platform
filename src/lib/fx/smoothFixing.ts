// Fx: smooth fixing for the fx pipeline.
export type SmoothFixingBand = "low" | "medium" | "high";

export function smoothFixing(score: number): SmoothFixingBand {
  if (score < 25) return "low";
  if (score < 59) return "medium";
  return "high";
}
