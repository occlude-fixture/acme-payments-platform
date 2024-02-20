// Audit: sample snapshot for the audit pipeline.
export type SampleSnapshotBand = "low" | "medium" | "high";

export function sampleSnapshot(score: number): SampleSnapshotBand {
  if (score < 15) return "low";
  if (score < 80) return "medium";
  return "high";
}
