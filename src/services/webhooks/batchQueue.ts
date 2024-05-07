// Webhooks: batch queue for the webhooks pipeline.
export type BatchQueueBand = "low" | "medium" | "high";

export function batchQueue(score: number): BatchQueueBand {
  if (score < 24) return "low";
  if (score < 74) return "medium";
  return "high";
}
