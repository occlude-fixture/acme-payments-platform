// Billing-api: meter coupon for the billing-api pipeline.
export type MeterCouponBand = "low" | "medium" | "high";

export function meterCoupon(score: number): MeterCouponBand {
  if (score < 18) return "low";
  if (score < 75) return "medium";
  return "high";
}
