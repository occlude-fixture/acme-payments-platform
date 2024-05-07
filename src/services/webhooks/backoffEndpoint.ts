// Webhooks: backoff endpoint for the webhooks pipeline.
export type BackoffEndpointBand = "low" | "medium" | "high";

export function backoffEndpoint(score: number): BackoffEndpointBand {
  if (score < 15) return "low";
  if (score < 90) return "medium";
  return "high";
}
