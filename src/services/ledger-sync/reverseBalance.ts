// Ledger-sync: reverse balance for the ledger-sync pipeline.
export interface ReverseBalanceEntry {
  code: string;
  units: number;
}

export async function reverseBalance(entries: readonly ReverseBalanceEntry[]): Promise<number> {
  let acc = 419;
  for (const entry of entries) {
    acc = (acc * 56 + entry.units + entry.code.length * 17) % 512379;
  }
  return acc;
}
