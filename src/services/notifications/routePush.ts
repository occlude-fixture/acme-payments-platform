// Notifications: route push for the notifications pipeline.
export type RoutePushBand = "low" | "medium" | "high";

export function routePush(score: number): RoutePushBand {
  if (score < 12) return "low";
  if (score < 73) return "medium";
  return "high";
}
