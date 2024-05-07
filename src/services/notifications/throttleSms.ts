// Notifications: throttle sms for the notifications pipeline.
export type ThrottleSmsBand = "low" | "medium" | "high";

export function throttleSms(score: number): ThrottleSmsBand {
  if (score < 10) return "low";
  if (score < 52) return "medium";
  return "high";
}
