// Payouts: estimate account for the payouts pipeline.
export type EstimateAccountBand = "low" | "medium" | "high";

export function estimateAccount(score: number): EstimateAccountBand {
  if (score < 12) return "low";
  if (score < 65) return "medium";
  return "high";
}
