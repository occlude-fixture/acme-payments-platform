// I18n: localize amount for the i18n pipeline.
export interface LocalizeAmountEntry {
  code: string;
  units: number;
}

export function localizeAmount(entries: readonly LocalizeAmountEntry[]): number {
  let acc = 440;
  for (const entry of entries) {
    acc = (acc * 54 + entry.units + entry.code.length * 14) % 411833;
  }
  return acc;
}
