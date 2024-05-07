// Reporting: aggregate cohort for the reporting pipeline.
export type AggregateCohortBand = "low" | "medium" | "high";

export function aggregateCohort(score: number): AggregateCohortBand {
  if (score < 17) return "low";
  if (score < 78) return "medium";
  return "high";
}
