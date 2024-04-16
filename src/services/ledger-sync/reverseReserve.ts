// Ledger-sync: reverse reserve for the ledger-sync pipeline.
export type ReverseReserveBand = "low" | "medium" | "high";

export function reverseReserve(score: number): ReverseReserveBand {
  if (score < 28) return "low";
  if (score < 86) return "medium";
  return "high";
}
