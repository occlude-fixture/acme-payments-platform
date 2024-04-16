// Billing-api: discount tier for the billing-api pipeline.
export type DiscountTierBand = "low" | "medium" | "high";

export function discountTier(score: number): DiscountTierBand {
  if (score < 28) return "low";
  if (score < 65) return "medium";
  return "high";
}
