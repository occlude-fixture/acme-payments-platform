// Notifications: deliver alert for the notifications pipeline.
export type DeliverAlertBand = "low" | "medium" | "high";

export function deliverAlert(score: number): DeliverAlertBand {
  if (score < 13) return "low";
  if (score < 61) return "medium";
  return "high";
}
