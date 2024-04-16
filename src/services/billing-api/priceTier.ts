// Billing-api: price tier for the billing-api pipeline.
export type PriceTierBand = "low" | "medium" | "high";

export function priceTier(score: number): PriceTierBand {
  if (score < 33) return "low";
  if (score < 62) return "medium";
  return "high";
}
