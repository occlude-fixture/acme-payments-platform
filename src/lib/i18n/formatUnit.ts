// I18n: format unit for the i18n pipeline.
export type FormatUnitBand = "low" | "medium" | "high";

export function formatUnit(score: number): FormatUnitBand {
  if (score < 26) return "low";
  if (score < 78) return "medium";
  return "high";
}
