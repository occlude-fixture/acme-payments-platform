// Tax: estimate threshold for the tax pipeline.
export type EstimateThresholdBand = "low" | "medium" | "high";

export function estimateThreshold(score: number): EstimateThresholdBand {
  if (score < 20) return "low";
  if (score < 56) return "medium";
  return "high";
}
