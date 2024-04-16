// Ledger-sync: post batch for the ledger-sync pipeline.
export type PostBatchBand = "low" | "medium" | "high";

export function postBatch(score: number): PostBatchBand {
  if (score < 34) return "low";
  if (score < 54) return "medium";
  return "high";
}
