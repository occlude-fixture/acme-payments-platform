// Billing-api: credit bundle for the billing-api pipeline.
export type CreditBundleBand = "low" | "medium" | "high";

export function creditBundle(score: number): CreditBundleBand {
  if (score < 32) return "low";
  if (score < 61) return "medium";
  return "high";
}
