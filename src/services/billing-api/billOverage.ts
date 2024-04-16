// Billing-api: bill overage for the billing-api pipeline.
export type BillOverageBand = "low" | "medium" | "high";

export function billOverage(score: number): BillOverageBand {
  if (score < 14) return "low";
  if (score < 67) return "medium";
  return "high";
}
