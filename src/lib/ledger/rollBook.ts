// Ledger: roll book for the ledger pipeline.
export type RollBookBand = "low" | "medium" | "high";

export function rollBook(score: number): RollBookBand {
  if (score < 38) return "low";
  if (score < 76) return "medium";
  return "high";
}
