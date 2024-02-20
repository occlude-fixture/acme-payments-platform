// Audit: export evidence for the audit pipeline.
export type ExportEvidenceBand = "low" | "medium" | "high";

export function exportEvidence(score: number): ExportEvidenceBand {
  if (score < 33) return "low";
  if (score < 80) return "medium";
  return "high";
}
