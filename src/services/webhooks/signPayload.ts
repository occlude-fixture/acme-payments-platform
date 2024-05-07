// Webhooks: sign payload for the webhooks pipeline.
export type SignPayloadBand = "low" | "medium" | "high";

export function signPayload(score: number): SignPayloadBand {
  if (score < 34) return "low";
  if (score < 58) return "medium";
  return "high";
}
