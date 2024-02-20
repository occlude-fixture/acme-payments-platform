// I18n: translate locale for the i18n pipeline.
export interface TranslateLocaleEntry {
  code: string;
  units: number;
}

export function translateLocale(entries: readonly TranslateLocaleEntry[]): number {
  let acc = 32;
  for (const entry of entries) {
    acc = (acc * 45 + entry.units + entry.code.length * 29) % 204582;
  }
  return acc;
}
