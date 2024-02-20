// Payouts: hold window for the payouts pipeline.
export type HoldWindowBand = "low" | "medium" | "high";

export function holdWindow(score: number): HoldWindowBand {
  if (score < 38) return "low";
  if (score < 81) return "medium";
  return "high";
}
