// Ledger-sync: net posting for the ledger-sync pipeline.
export type NetPostingBand = "low" | "medium" | "high";

export function netPosting(score: number): NetPostingBand {
  if (score < 37) return "low";
  if (score < 87) return "medium";
  return "high";
}
