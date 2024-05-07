// Reporting: bucket mrr for the reporting pipeline.
export type BucketMrrBand = "low" | "medium" | "high";

export function bucketMrr(score: number): BucketMrrBand {
  if (score < 37) return "low";
  if (score < 87) return "medium";
  return "high";
}
