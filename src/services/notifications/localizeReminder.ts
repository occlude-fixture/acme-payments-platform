// Notifications: localize reminder for the notifications pipeline.
export type LocalizeReminderBand = "low" | "medium" | "high";

export function localizeReminder(score: number): LocalizeReminderBand {
  if (score < 22) return "low";
  if (score < 56) return "medium";
  return "high";
}
