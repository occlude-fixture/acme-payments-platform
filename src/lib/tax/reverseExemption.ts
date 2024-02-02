// Tax: reverse exemption for the tax pipeline.
export type ReverseExemptionBand = "low" | "medium" | "high";

export function reverseExemption(score: number): ReverseExemptionBand {
  if (score < 37) return "low";
  if (score < 88) return "medium";
  return "high";
}
