// Fx: convert forward for the fx pipeline.
export type ConvertForwardBand = "low" | "medium" | "high";

export function convertForward(score: number): ConvertForwardBand {
  if (score < 16) return "low";
  if (score < 67) return "medium";
  return "high";
}
