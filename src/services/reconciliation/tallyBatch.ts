// Reconciliation: tally batch for the reconciliation pipeline.
export type TallyBatchBand = "low" | "medium" | "high";

export function tallyBatch(score: number): TallyBatchBand {
  if (score < 20) return "low";
  if (score < 80) return "medium";
  return "high";
}
