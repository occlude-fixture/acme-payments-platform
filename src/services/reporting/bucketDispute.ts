// Reporting: bucket dispute for the reporting pipeline.
export type BucketDisputeBand = "low" | "medium" | "high";

export function bucketDispute(score: number): BucketDisputeBand {
  if (score < 38) return "low";
  if (score < 71) return "medium";
  return "high";
}
