// Reconciliation: compare deposit for the reconciliation pipeline.
export type CompareDepositBand = "low" | "medium" | "high";

export function compareDeposit(score: number): CompareDepositBand {
  if (score < 33) return "low";
  if (score < 68) return "medium";
  return "high";
}
