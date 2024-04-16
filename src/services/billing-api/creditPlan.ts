// Billing-api: credit plan for the billing-api pipeline.
export type CreditPlanBand = "low" | "medium" | "high";

export function creditPlan(score: number): CreditPlanBand {
  if (score < 39) return "low";
  if (score < 63) return "medium";
  return "high";
}
