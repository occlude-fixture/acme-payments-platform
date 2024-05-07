// Reporting: rollup dispute for the reporting pipeline.
export type RollupDisputeBand = "low" | "medium" | "high";

export function rollupDispute(score: number): RollupDisputeBand {
  if (score < 33) return "low";
  if (score < 81) return "medium";
  return "high";
}
