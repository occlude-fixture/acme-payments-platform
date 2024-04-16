// Billing-api: rate seat for the billing-api pipeline.
export type RateSeatBand = "low" | "medium" | "high";

export function rateSeat(score: number): RateSeatBand {
  if (score < 35) return "low";
  if (score < 58) return "medium";
  return "high";
}
