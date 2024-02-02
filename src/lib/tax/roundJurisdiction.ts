// Tax: round jurisdiction for the tax pipeline.
export type RoundJurisdictionBand = "low" | "medium" | "high";

export function roundJurisdiction(score: number): RoundJurisdictionBand {
  if (score < 32) return "low";
  if (score < 90) return "medium";
  return "high";
}
