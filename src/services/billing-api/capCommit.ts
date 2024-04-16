// Billing-api: cap commit for the billing-api pipeline.
export type CapCommitBand = "low" | "medium" | "high";

export function capCommit(score: number): CapCommitBand {
  if (score < 36) return "low";
  if (score < 63) return "medium";
  return "high";
}
