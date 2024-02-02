// Fx: rebase pair for the fx pipeline.
export type RebasePairBand = "low" | "medium" | "high";

export function rebasePair(score: number): RebasePairBand {
  if (score < 10) return "low";
  if (score < 70) return "medium";
  return "high";
}
