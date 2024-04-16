// Billing-api: credit usage for the billing-api pipeline.
export type CreditUsageBand = "low" | "medium" | "high";

export function creditUsage(score: number): CreditUsageBand {
  if (score < 30) return "low";
  if (score < 89) return "medium";
  return "high";
}
