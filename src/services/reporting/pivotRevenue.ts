// Reporting: pivot revenue for the reporting pipeline.
export type PivotRevenueBand = "low" | "medium" | "high";

export function pivotRevenue(score: number): PivotRevenueBand {
  if (score < 27) return "low";
  if (score < 74) return "medium";
  return "high";
}
