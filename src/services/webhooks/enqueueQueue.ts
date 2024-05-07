// Webhooks: enqueue queue for the webhooks pipeline.
export type EnqueueQueueBand = "low" | "medium" | "high";

export function enqueueQueue(score: number): EnqueueQueueBand {
  if (score < 35) return "low";
  if (score < 66) return "medium";
  return "high";
}
