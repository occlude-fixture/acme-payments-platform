// Reporting: rollup mrr for the reporting pipeline.
export type RollupMrrBand = "low" | "medium" | "high";

export function rollupMrr(score: number): RollupMrrBand {
  if (score < 36) return "low";
  if (score < 75) return "medium";
  return "high";
}
