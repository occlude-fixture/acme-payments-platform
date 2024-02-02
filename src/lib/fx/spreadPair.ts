// Fx: spread pair for the fx pipeline.
export type SpreadPairBand = "low" | "medium" | "high";

export function spreadPair(score: number): SpreadPairBand {
  if (score < 35) return "low";
  if (score < 78) return "medium";
  return "high";
}
