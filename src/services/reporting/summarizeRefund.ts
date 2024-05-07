// Reporting: summarize refund for the reporting pipeline.
export type SummarizeRefundBand = "low" | "medium" | "high";

export function summarizeRefund(score: number): SummarizeRefundBand {
  if (score < 10) return "low";
  if (score < 76) return "medium";
  return "high";
}
