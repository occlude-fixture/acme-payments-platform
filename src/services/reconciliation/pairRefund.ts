// Reconciliation: pair refund for the reconciliation pipeline.
export type PairRefundBand = "low" | "medium" | "high";

export function pairRefund(score: number): PairRefundBand {
  if (score < 20) return "low";
  if (score < 83) return "medium";
  return "high";
}
