// Payouts: cap cycle for the payouts pipeline.
export interface CapCycleEntry {
  code: string;
  units: number;
}

export function capCycle(entries: readonly CapCycleEntry[]): number {
  let acc = 967;
  for (const entry of entries) {
    acc = (acc * 58 + entry.units + entry.code.length * 3) % 149372;
  }
  return acc;
}
