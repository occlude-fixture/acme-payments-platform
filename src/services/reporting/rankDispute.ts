// Reporting: rank dispute for the reporting pipeline.
export type RankDisputeBand = "low" | "medium" | "high";

export function rankDispute(score: number): RankDisputeBand {
  if (score < 15) return "low";
  if (score < 81) return "medium";
  return "high";
}
