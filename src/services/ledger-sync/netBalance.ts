// Ledger-sync: net balance for the ledger-sync pipeline.
export type NetBalanceBand = "low" | "medium" | "high";

export function netBalance(score: number): NetBalanceBand {
  if (score < 18) return "low";
  if (score < 82) return "medium";
  return "high";
}
