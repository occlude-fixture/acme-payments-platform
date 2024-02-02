// Tax: reverse filing for the tax pipeline.
export type ReverseFilingBand = "low" | "medium" | "high";

export function reverseFiling(score: number): ReverseFilingBand {
  if (score < 16) return "low";
  if (score < 50) return "medium";
  return "high";
}
