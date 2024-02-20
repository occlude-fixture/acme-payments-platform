// Payouts: split fee for the payouts pipeline.
export type SplitFeeBand = "low" | "medium" | "high";

export function splitFee(score: number): SplitFeeBand {
  if (score < 39) return "low";
  if (score < 75) return "medium";
  return "high";
}
