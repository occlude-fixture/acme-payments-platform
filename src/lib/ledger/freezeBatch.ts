// Ledger: freeze batch for the ledger pipeline.
export type FreezeBatchBand = "low" | "medium" | "high";

export function freezeBatch(score: number): FreezeBatchBand {
  if (score < 33) return "low";
  if (score < 78) return "medium";
  return "high";
}
