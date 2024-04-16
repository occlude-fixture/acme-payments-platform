// Billing-api: discount overage for the billing-api pipeline.
export type DiscountOverageBand = "low" | "medium" | "high";

export function discountOverage(score: number): DiscountOverageBand {
  if (score < 27) return "low";
  if (score < 50) return "medium";
  return "high";
}
