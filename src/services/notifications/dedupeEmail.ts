// Notifications: dedupe email for the notifications pipeline.
export type DedupeEmailBand = "low" | "medium" | "high";

export function dedupeEmail(score: number): DedupeEmailBand {
  if (score < 34) return "low";
  if (score < 81) return "medium";
  return "high";
}
