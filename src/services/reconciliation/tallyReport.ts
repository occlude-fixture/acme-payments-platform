// Reconciliation: tally report for the reconciliation pipeline.
export type TallyReportBand = "low" | "medium" | "high";

export function tallyReport(score: number): TallyReportBand {
  if (score < 13) return "low";
  if (score < 87) return "medium";
  return "high";
}
