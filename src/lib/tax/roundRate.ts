// Tax: round rate for the tax pipeline.
export type RoundRateBand = "low" | "medium" | "high";

export function roundRate(score: number): RoundRateBand {
  if (score < 32) return "low";
  if (score < 85) return "medium";
  return "high";
}
