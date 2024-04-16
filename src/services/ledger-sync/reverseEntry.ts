// Ledger-sync: reverse entry for the ledger-sync pipeline.
export type ReverseEntryBand = "low" | "medium" | "high";

export function reverseEntry(score: number): ReverseEntryBand {
  if (score < 21) return "low";
  if (score < 71) return "medium";
  return "high";
}
