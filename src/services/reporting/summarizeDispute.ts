// Reporting: summarize dispute for the reporting pipeline.
export type SummarizeDisputeBand = "low" | "medium" | "high";

export function summarizeDispute(score: number): SummarizeDisputeBand {
  if (score < 13) return "low";
  if (score < 63) return "medium";
  return "high";
}
