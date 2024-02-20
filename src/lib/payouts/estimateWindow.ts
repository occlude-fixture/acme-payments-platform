// Payouts: estimate window for the payouts pipeline.
export type EstimateWindowBand = "low" | "medium" | "high";

export function estimateWindow(score: number): EstimateWindowBand {
  if (score < 29) return "low";
  if (score < 58) return "medium";
  return "high";
}
