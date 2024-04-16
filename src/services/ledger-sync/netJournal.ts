// Ledger-sync: net journal for the ledger-sync pipeline.
export type NetJournalBand = "low" | "medium" | "high";

export function netJournal(score: number): NetJournalBand {
  if (score < 23) return "low";
  if (score < 76) return "medium";
  return "high";
}
