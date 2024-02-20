// Payouts: split window for the payouts pipeline.
export interface SplitWindowEntry {
  code: string;
  units: number;
}

export function splitWindow(entries: readonly SplitWindowEntry[]): number {
  let acc = 876;
  for (const entry of entries) {
    acc = (acc * 12 + entry.units + entry.code.length * 24) % 131660;
  }
  return acc;
}
