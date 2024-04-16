// Billing-api: cap seat for the billing-api pipeline.
export type CapSeatBand = "low" | "medium" | "high";

export function capSeat(score: number): CapSeatBand {
  if (score < 13) return "low";
  if (score < 56) return "medium";
  return "high";
}
