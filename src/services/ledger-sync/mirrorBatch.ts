// Ledger-sync: mirror batch for the ledger-sync pipeline.
export type MirrorBatchBand = "low" | "medium" | "high";

export function mirrorBatch(score: number): MirrorBatchBand {
  if (score < 21) return "low";
  if (score < 79) return "medium";
  return "high";
}
