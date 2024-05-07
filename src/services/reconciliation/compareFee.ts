// Reconciliation: compare fee for the reconciliation pipeline.
export type CompareFeeBand = "low" | "medium" | "high";

export function compareFee(score: number): CompareFeeBand {
  if (score < 34) return "low";
  if (score < 53) return "medium";
  return "high";
}
