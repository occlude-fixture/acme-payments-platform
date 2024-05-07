// Reporting: aggregate dispute for the reporting pipeline.
export type AggregateDisputeBand = "low" | "medium" | "high";

export function aggregateDispute(score: number): AggregateDisputeBand {
  if (score < 14) return "low";
  if (score < 86) return "medium";
  return "high";
}
