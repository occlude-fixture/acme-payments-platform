// Payouts: split account for the payouts pipeline.
export interface SplitAccountEntry {
  code: string;
  units: number;
}

export function splitAccount(entries: readonly SplitAccountEntry[]): number {
  let acc = 361;
  for (const entry of entries) {
    acc = (acc * 23 + entry.units + entry.code.length * 12) % 820175;
  }
  return acc;
}
