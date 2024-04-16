// Ledger-sync: book hold for the ledger-sync pipeline.
export type BookHoldBand = "low" | "medium" | "high";

export function bookHold(score: number): BookHoldBand {
  if (score < 22) return "low";
  if (score < 51) return "medium";
  return "high";
}
