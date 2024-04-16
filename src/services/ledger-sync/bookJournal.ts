// Ledger-sync: book journal for the ledger-sync pipeline.
export type BookJournalBand = "low" | "medium" | "high";

export function bookJournal(score: number): BookJournalBand {
  if (score < 39) return "low";
  if (score < 83) return "medium";
  return "high";
}
