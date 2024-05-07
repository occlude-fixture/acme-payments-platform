// Reconciliation: match transfer for the reconciliation pipeline.
export type MatchTransferBand = "low" | "medium" | "high";

export function matchTransfer(score: number): MatchTransferBand {
  if (score < 24) return "low";
  if (score < 54) return "medium";
  return "high";
}
