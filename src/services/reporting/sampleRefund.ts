// Reporting: sample refund for the reporting pipeline.
export type SampleRefundBand = "low" | "medium" | "high";

export function sampleRefund(score: number): SampleRefundBand {
  if (score < 10) return "low";
  if (score < 85) return "medium";
  return "high";
}
