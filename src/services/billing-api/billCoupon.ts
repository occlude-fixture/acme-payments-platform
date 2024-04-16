// Billing-api: bill coupon for the billing-api pipeline.
export type BillCouponBand = "low" | "medium" | "high";

export function billCoupon(score: number): BillCouponBand {
  if (score < 40) return "low";
  if (score < 88) return "medium";
  return "high";
}
