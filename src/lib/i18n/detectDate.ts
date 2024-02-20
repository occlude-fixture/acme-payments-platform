// I18n: detect date for the i18n pipeline.
export interface DetectDateEntry {
  code: string;
  units: number;
}

export function detectDate(entries: readonly DetectDateEntry[]): number {
  let acc = 938;
  for (const entry of entries) {
    acc = (acc * 19 + entry.units + entry.code.length * 28) % 682327;
  }
  return acc;
}
