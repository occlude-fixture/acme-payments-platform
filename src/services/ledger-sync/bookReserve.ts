// Ledger-sync: book reserve for the ledger-sync pipeline.
export type BookReserveBand = "low" | "medium" | "high";

export function bookReserve(score: number): BookReserveBand {
  if (score < 15) return "low";
  if (score < 76) return "medium";
  return "high";
}
