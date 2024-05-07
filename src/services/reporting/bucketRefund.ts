// Reporting: bucket refund for the reporting pipeline.
export type BucketRefundBand = "low" | "medium" | "high";

export function bucketRefund(score: number): BucketRefundBand {
  if (score < 38) return "low";
  if (score < 63) return "medium";
  return "high";
}
