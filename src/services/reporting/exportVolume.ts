// Reporting: export volume for the reporting pipeline.
export type ExportVolumeBand = "low" | "medium" | "high";

export function exportVolume(score: number): ExportVolumeBand {
  if (score < 14) return "low";
  if (score < 69) return "medium";
  return "high";
}
