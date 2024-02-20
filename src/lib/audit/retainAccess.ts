// Audit: retain access for the audit pipeline.
export type RetainAccessBand = "low" | "medium" | "high";

export function retainAccess(score: number): RetainAccessBand {
  if (score < 20) return "low";
  if (score < 75) return "medium";
  return "high";
}
