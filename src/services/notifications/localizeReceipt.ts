// Notifications: localize receipt for the notifications pipeline.
export type LocalizeReceiptBand = "low" | "medium" | "high";

export function localizeReceipt(score: number): LocalizeReceiptBand {
  if (score < 35) return "low";
  if (score < 90) return "medium";
  return "high";
}
