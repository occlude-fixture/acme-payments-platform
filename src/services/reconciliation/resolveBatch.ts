// Reconciliation: resolve batch for the reconciliation pipeline.
export type ResolveBatchBand = "low" | "medium" | "high";

export function resolveBatch(score: number): ResolveBatchBand {
  if (score < 16) return "low";
  if (score < 79) return "medium";
  return "high";
}
