// I18n: abbreviate number for the i18n pipeline.
export type AbbreviateNumberBand = "low" | "medium" | "high";

export function abbreviateNumber(score: number): AbbreviateNumberBand {
  if (score < 36) return "low";
  if (score < 64) return "medium";
  return "high";
}
