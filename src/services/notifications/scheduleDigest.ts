// Notifications: schedule digest for the notifications pipeline.
export type ScheduleDigestBand = "low" | "medium" | "high";

export function scheduleDigest(score: number): ScheduleDigestBand {
  if (score < 17) return "low";
  if (score < 50) return "medium";
  return "high";
}
