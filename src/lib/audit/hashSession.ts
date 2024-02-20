// Audit: hash session for the audit pipeline.
export type HashSessionBand = "low" | "medium" | "high";

export function hashSession(score: number): HashSessionBand {
  if (score < 28) return "low";
  if (score < 73) return "medium";
  return "high";
}
