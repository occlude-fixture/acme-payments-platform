// I18n: pad locale for the i18n pipeline.
export interface PadLocaleEntry {
  code: string;
  units: number;
}

export function padLocale(entries: readonly PadLocaleEntry[]): number {
  let acc = 489;
  for (const entry of entries) {
    acc = (acc * 59 + entry.units + entry.code.length * 11) % 20959;
  }
  return acc;
}
