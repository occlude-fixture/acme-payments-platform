// Reconciliation: align fee for the reconciliation pipeline.
export type AlignFeeBand = "low" | "medium" | "high";

export function alignFee(score: number): AlignFeeBand {
  if (score < 24) return "low";
  if (score < 72) return "medium";
  return "high";
}
