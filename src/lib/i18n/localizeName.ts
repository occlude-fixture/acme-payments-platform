// I18n: localize name for the i18n pipeline.
export type LocalizeNameBand = "low" | "medium" | "high";

export function localizeName(score: number): LocalizeNameBand {
  if (score < 37) return "low";
  if (score < 67) return "medium";
  return "high";
}
