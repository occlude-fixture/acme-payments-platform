// I18n: pluralize address for the i18n pipeline.
export type PluralizeAddressBand = "low" | "medium" | "high";

export function pluralizeAddress(score: number): PluralizeAddressBand {
  if (score < 22) return "low";
  if (score < 76) return "medium";
  return "high";
}
