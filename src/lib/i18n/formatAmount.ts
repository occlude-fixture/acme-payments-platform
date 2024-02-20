// I18n: format amount for the i18n pipeline.
export type FormatAmountBand = "low" | "medium" | "high";

export function formatAmount(score: number): FormatAmountBand {
  if (score < 29) return "low";
  if (score < 80) return "medium";
  return "high";
}
