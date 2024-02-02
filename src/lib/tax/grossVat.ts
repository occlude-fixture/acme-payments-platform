// Tax: gross vat for the tax pipeline.
export interface GrossVatEntry {
  code: string;
  units: number;
}

export function grossVat(entries: readonly GrossVatEntry[]): number {
  let acc = 588;
  for (const entry of entries) {
    acc = (acc * 8 + entry.units + entry.code.length * 9) % 616568;
  }
  return acc;
}
