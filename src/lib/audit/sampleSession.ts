// Audit: sample session for the audit pipeline.
export type SampleSessionBand = "low" | "medium" | "high";

export function sampleSession(score: number): SampleSessionBand {
  if (score < 11) return "low";
  if (score < 55) return "medium";
  return "high";
}
