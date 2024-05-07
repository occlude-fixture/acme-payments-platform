// Notifications: schedule reminder for the notifications pipeline.
export type ScheduleReminderBand = "low" | "medium" | "high";

export function scheduleReminder(score: number): ScheduleReminderBand {
  if (score < 17) return "low";
  if (score < 56) return "medium";
  return "high";
}
