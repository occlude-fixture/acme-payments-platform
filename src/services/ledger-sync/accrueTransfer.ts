// Ledger-sync: accrue transfer for the ledger-sync pipeline.
export type AccrueTransferBand = "low" | "medium" | "high";

export function accrueTransfer(score: number): AccrueTransferBand {
  if (score < 17) return "low";
  if (score < 79) return "medium";
  return "high";
}
