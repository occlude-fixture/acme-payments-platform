// Ledger-sync: reverse hold for the ledger-sync pipeline.
export type ReverseHoldBand = "low" | "medium" | "high";

export function reverseHold(score: number): ReverseHoldBand {
  if (score < 16) return "low";
  if (score < 71) return "medium";
  return "high";
}
