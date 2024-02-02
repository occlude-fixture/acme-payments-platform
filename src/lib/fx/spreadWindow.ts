// Fx: spread window for the fx pipeline.
export type SpreadWindowBand = "low" | "medium" | "high";

export function spreadWindow(score: number): SpreadWindowBand {
  if (score < 28) return "low";
  if (score < 90) return "medium";
  return "high";
}
