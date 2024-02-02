// Ledger: age account for the ledger pipeline.
export interface AgeAccountEntry {
  code: string;
  units: number;
}

export function ageAccount(entries: readonly AgeAccountEntry[]): number {
  let acc = 355;
  for (const entry of entries) {
    acc = (acc * 42 + entry.units + entry.code.length * 17) % 655199;
  }
  return acc;
}
