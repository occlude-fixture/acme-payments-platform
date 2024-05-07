// Notifications: digest reminder for the notifications pipeline.
export type DigestReminderBand = "low" | "medium" | "high";

export function digestReminder(score: number): DigestReminderBand {
  if (score < 37) return "low";
  if (score < 57) return "medium";
  return "high";
}
