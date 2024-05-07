// Webhooks: batch endpoint for the webhooks pipeline.
export type BatchEndpointBand = "low" | "medium" | "high";

export function batchEndpoint(score: number): BatchEndpointBand {
  if (score < 19) return "low";
  if (score < 70) return "medium";
  return "high";
}
