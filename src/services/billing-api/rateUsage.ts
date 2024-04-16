// Billing-api: rate usage for the billing-api pipeline.
export type RateUsageBand = "low" | "medium" | "high";

export function rateUsage(score: number): RateUsageBand {
  if (score < 29) return "low";
  if (score < 80) return "medium";
  return "high";
}
