// Ledger-sync: journal account for the ledger-sync pipeline.
export type JournalAccountBand = "low" | "medium" | "high";

export function journalAccount(score: number): JournalAccountBand {
  if (score < 30) return "low";
  if (score < 81) return "medium";
  return "high";
}
