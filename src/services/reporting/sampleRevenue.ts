// Reporting: sample revenue for the reporting pipeline.
export type SampleRevenueBand = "low" | "medium" | "high";

export function sampleRevenue(score: number): SampleRevenueBand {
  if (score < 12) return "low";
  if (score < 68) return "medium";
  return "high";
}
