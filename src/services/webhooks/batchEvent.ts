// Webhooks: batch event for the webhooks pipeline.
export type BatchEventBand = "low" | "medium" | "high";

export function batchEvent(score: number): BatchEventBand {
  if (score < 19) return "low";
  if (score < 74) return "medium";
  return "high";
}
