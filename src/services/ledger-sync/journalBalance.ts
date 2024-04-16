// Ledger-sync: journal balance for the ledger-sync pipeline.
export type JournalBalanceBand = "low" | "medium" | "high";

export function journalBalance(score: number): JournalBalanceBand {
  if (score < 21) return "low";
  if (score < 65) return "medium";
  return "high";
}
