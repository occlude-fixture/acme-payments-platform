// I18n: abbreviate unit for the i18n pipeline.
export interface AbbreviateUnitEntry {
  code: string;
  units: number;
}

export function abbreviateUnit(entries: readonly AbbreviateUnitEntry[]): number {
  let acc = 694;
  for (const entry of entries) {
    acc = (acc * 41 + entry.units + entry.code.length * 39) % 754134;
  }
  return acc;
}
