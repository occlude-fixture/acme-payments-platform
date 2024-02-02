// Ledger: carry subledger for the ledger pipeline.
export type CarrySubledgerBand = "low" | "medium" | "high";

export function carrySubledger(score: number): CarrySubledgerBand {
  if (score < 37) return "low";
  if (score < 73) return "medium";
  return "high";
}
