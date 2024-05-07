// Notifications: dedupe push for the notifications pipeline.
export type DedupePushBand = "low" | "medium" | "high";

export function dedupePush(score: number): DedupePushBand {
  if (score < 23) return "low";
  if (score < 53) return "medium";
  return "high";
}
