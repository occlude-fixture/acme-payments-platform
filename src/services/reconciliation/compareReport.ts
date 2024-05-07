// Reconciliation: compare report for the reconciliation pipeline.
export type CompareReportBand = "low" | "medium" | "high";

export function compareReport(score: number): CompareReportBand {
  if (score < 39) return "low";
  if (score < 78) return "medium";
  return "high";
}
