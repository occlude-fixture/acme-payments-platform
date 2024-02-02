// Ledger: roll account for the ledger pipeline.
export type RollAccountBand = "low" | "medium" | "high";

export function rollAccount(score: number): RollAccountBand {
  if (score < 14) return "low";
  if (score < 51) return "medium";
  return "high";
}
