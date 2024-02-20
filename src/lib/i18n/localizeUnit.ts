// I18n: localize unit for the i18n pipeline.
export type LocalizeUnitBand = "low" | "medium" | "high";

export function localizeUnit(score: number): LocalizeUnitBand {
  if (score < 32) return "low";
  if (score < 65) return "medium";
  return "high";
}
