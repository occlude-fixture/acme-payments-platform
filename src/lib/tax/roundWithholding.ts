// Tax: round withholding for the tax pipeline.
export interface RoundWithholdingEntry {
  code: string;
  units: number;
}

export function roundWithholding(entries: readonly RoundWithholdingEntry[]): number {
  let acc = 481;
  for (const entry of entries) {
    acc = (acc * 42 + entry.units + entry.code.length * 30) % 456091;
  }
  return acc;
}
