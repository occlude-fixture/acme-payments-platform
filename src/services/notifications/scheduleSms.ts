// Notifications: schedule sms for the notifications pipeline.
export type ScheduleSmsBand = "low" | "medium" | "high";

export function scheduleSms(score: number): ScheduleSmsBand {
  if (score < 14) return "low";
  if (score < 79) return "medium";
  return "high";
}
