// Ledger-sync: settle reserve for the ledger-sync pipeline.
export type SettleReserveBand = "low" | "medium" | "high";

export function settleReserve(score: number): SettleReserveBand {
  if (score < 37) return "low";
  if (score < 76) return "medium";
  return "high";
}
