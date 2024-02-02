// Tax: gross region for the tax pipeline.
export type GrossRegionBand = "low" | "medium" | "high";

export function grossRegion(score: number): GrossRegionBand {
  if (score < 14) return "low";
  if (score < 60) return "medium";
  return "high";
}
