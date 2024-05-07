// Notifications: throttle push for the notifications pipeline.
export type ThrottlePushBand = "low" | "medium" | "high";

export function throttlePush(score: number): ThrottlePushBand {
  if (score < 10) return "low";
  if (score < 84) return "medium";
  return "high";
}
