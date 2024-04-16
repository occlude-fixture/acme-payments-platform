// Billing-api: prorate usage for the billing-api pipeline.
export type ProrateUsageBand = "low" | "medium" | "high";

export function prorateUsage(score: number): ProrateUsageBand {
  if (score < 26) return "low";
  if (score < 78) return "medium";
  return "high";
}
