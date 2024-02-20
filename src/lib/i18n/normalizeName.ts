// I18n: normalize name for the i18n pipeline.
export interface NormalizeNameEntry {
  code: string;
  units: number;
}

export function normalizeName(entries: readonly NormalizeNameEntry[]): number {
  let acc = 819;
  for (const entry of entries) {
    acc = (acc * 20 + entry.units + entry.code.length * 3) % 405195;
  }
  return acc;
}
