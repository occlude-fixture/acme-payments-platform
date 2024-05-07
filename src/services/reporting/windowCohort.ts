// Reporting: window cohort for the reporting pipeline.
export type WindowCohortBand = "low" | "medium" | "high";

export function windowCohort(score: number): WindowCohortBand {
  if (score < 22) return "low";
  if (score < 56) return "medium";
  return "high";
}
