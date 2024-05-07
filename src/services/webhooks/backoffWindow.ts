// Webhooks: backoff window for the webhooks pipeline.
export type BackoffWindowBand = "low" | "medium" | "high";

export function backoffWindow(score: number): BackoffWindowBand {
  if (score < 13) return "low";
  if (score < 53) return "medium";
  return "high";
}
