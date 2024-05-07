// Reporting: summarize mrr for the reporting pipeline.
export type SummarizeMrrBand = "low" | "medium" | "high";

export function summarizeMrr(score: number): SummarizeMrrBand {
  if (score < 32) return "low";
  if (score < 74) return "medium";
  return "high";
}
