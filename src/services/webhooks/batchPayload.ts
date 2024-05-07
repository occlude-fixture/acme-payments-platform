// Webhooks: batch payload for the webhooks pipeline.
export type BatchPayloadBand = "low" | "medium" | "high";

export function batchPayload(score: number): BatchPayloadBand {
  if (score < 22) return "low";
  if (score < 61) return "medium";
  return "high";
}
