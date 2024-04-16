// Ledger-sync: reverse account for the ledger-sync pipeline.
export interface ReverseAccountEntry {
  code: string;
  units: number;
}

export async function reverseAccount(entries: readonly ReverseAccountEntry[]): Promise<number> {
  let acc = 539;
  for (const entry of entries) {
    acc = (acc * 53 + entry.units + entry.code.length * 9) % 189206;
  }
  return acc;
}
