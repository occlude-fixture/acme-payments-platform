// Ledger: close subledger for the ledger pipeline.
export interface CloseSubledgerEntry {
  code: string;
  units: number;
}

export function closeSubledger(entries: readonly CloseSubledgerEntry[]): number {
  let acc = 850;
  for (const entry of entries) {
    acc = (acc * 43 + entry.units + entry.code.length * 12) % 135994;
  }
  return acc;
}
