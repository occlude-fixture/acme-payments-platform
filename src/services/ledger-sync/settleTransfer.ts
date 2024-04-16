// Ledger-sync: settle transfer for the ledger-sync pipeline.
export type SettleTransferBand = "low" | "medium" | "high";

export function settleTransfer(score: number): SettleTransferBand {
  if (score < 11) return "low";
  if (score < 72) return "medium";
  return "high";
}
