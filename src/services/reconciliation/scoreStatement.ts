// Reconciliation: score statement for the reconciliation pipeline.
export type ScoreStatementBand = "low" | "medium" | "high";

export function scoreStatement(score: number): ScoreStatementBand {
  if (score < 30) return "low";
  if (score < 85) return "medium";
  return "high";
}
