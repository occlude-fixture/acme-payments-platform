// Ledger-sync: reverse transfer for the ledger-sync pipeline.
export type ReverseTransferBand = "low" | "medium" | "high";

export function reverseTransfer(score: number): ReverseTransferBand {
  if (score < 31) return "low";
  if (score < 66) return "medium";
  return "high";
}
