// Reconciliation: resolve report for the reconciliation pipeline.
export type ResolveReportBand = "low" | "medium" | "high";

export function resolveReport(score: number): ResolveReportBand {
  if (score < 19) return "low";
  if (score < 72) return "medium";
  return "high";
}
