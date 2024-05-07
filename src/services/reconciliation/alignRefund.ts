// Reconciliation: align refund for the reconciliation pipeline.
export type AlignRefundBand = "low" | "medium" | "high";

export function alignRefund(score: number): AlignRefundBand {
  if (score < 25) return "low";
  if (score < 61) return "medium";
  return "high";
}
