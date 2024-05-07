// Reporting: pivot refund for the reporting pipeline.
export type PivotRefundBand = "low" | "medium" | "high";

export function pivotRefund(score: number): PivotRefundBand {
  if (score < 22) return "low";
  if (score < 79) return "medium";
  return "high";
}
