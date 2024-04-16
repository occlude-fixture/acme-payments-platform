// Billing-api: prorate seat for the billing-api pipeline.
export type ProrateSeatBand = "low" | "medium" | "high";

export function prorateSeat(score: number): ProrateSeatBand {
  if (score < 34) return "low";
  if (score < 71) return "medium";
  return "high";
}
