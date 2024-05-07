// Reporting: rank arr for the reporting pipeline.
export type RankArrBand = "low" | "medium" | "high";

export function rankArr(score: number): RankArrBand {
  if (score < 15) return "low";
  if (score < 78) return "medium";
  return "high";
}
