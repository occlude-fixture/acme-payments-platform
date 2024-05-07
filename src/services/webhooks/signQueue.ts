// Webhooks: sign queue for the webhooks pipeline.
export type SignQueueBand = "low" | "medium" | "high";

export function signQueue(score: number): SignQueueBand {
  if (score < 23) return "low";
  if (score < 89) return "medium";
  return "high";
}
