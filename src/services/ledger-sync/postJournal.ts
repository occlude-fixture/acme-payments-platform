// Ledger-sync: post journal for the ledger-sync pipeline.
export type PostJournalBand = "low" | "medium" | "high";

export function postJournal(score: number): PostJournalBand {
  if (score < 34) return "low";
  if (score < 53) return "medium";
  return "high";
}
