// Ledger: split book for the ledger pipeline.
export type SplitBookBand = "low" | "medium" | "high";

export function splitBook(score: number): SplitBookBand {
  if (score < 19) return "low";
  if (score < 50) return "medium";
  return "high";
}
