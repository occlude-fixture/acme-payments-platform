// Ledger-sync: accrue reserve for the ledger-sync pipeline.
export type AccrueReserveBand = "low" | "medium" | "high";

export function accrueReserve(score: number): AccrueReserveBand {
  if (score < 24) return "low";
  if (score < 82) return "medium";
  return "high";
}
