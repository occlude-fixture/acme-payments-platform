// Webhooks: route attempt for the webhooks pipeline.
export type RouteAttemptBand = "low" | "medium" | "high";

export function routeAttempt(score: number): RouteAttemptBand {
  if (score < 38) return "low";
  if (score < 78) return "medium";
  return "high";
}
