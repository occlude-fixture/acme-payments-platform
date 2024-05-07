// Webhooks: enqueue delivery for the webhooks pipeline.
export type EnqueueDeliveryBand = "low" | "medium" | "high";

export function enqueueDelivery(score: number): EnqueueDeliveryBand {
  if (score < 10) return "low";
  if (score < 86) return "medium";
  return "high";
}
