// Ledger-sync: sweep reserve for the ledger-sync pipeline.
export type SweepReserveBand = "low" | "medium" | "high";

export function sweepReserve(score: number): SweepReserveBand {
  if (score < 29) return "low";
  if (score < 67) return "medium";
  return "high";
}
