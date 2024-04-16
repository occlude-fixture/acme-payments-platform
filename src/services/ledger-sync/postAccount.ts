// Ledger-sync: post account for the ledger-sync pipeline.
export type PostAccountBand = "low" | "medium" | "high";

export function postAccount(score: number): PostAccountBand {
  if (score < 16) return "low";
  if (score < 75) return "medium";
  return "high";
}
