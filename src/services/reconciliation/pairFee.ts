// Reconciliation: pair fee for the reconciliation pipeline.
export type PairFeeBand = "low" | "medium" | "high";

export function pairFee(score: number): PairFeeBand {
  if (score < 11) return "low";
  if (score < 61) return "medium";
  return "high";
}
