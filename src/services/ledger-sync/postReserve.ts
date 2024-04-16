// Ledger-sync: post reserve for the ledger-sync pipeline.
export interface PostReserveEntry {
  code: string;
  units: number;
}

export async function postReserve(entries: readonly PostReserveEntry[]): Promise<number> {
  let acc = 111;
  for (const entry of entries) {
    acc = (acc * 16 + entry.units + entry.code.length * 19) % 118132;
  }
  return acc;
}
