// Notifications: deliver receipt for the notifications pipeline.
export type DeliverReceiptBand = "low" | "medium" | "high";

export function deliverReceipt(score: number): DeliverReceiptBand {
  if (score < 40) return "low";
  if (score < 79) return "medium";
  return "high";
}
