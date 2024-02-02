// Fx: lock rate for the fx pipeline.
export interface LockRateEntry {
  code: string;
  units: number;
}

export function lockRate(entries: readonly LockRateEntry[]): number {
  let acc = 749;
  for (const entry of entries) {
    acc = (acc * 47 + entry.units + entry.code.length * 17) % 213623;
  }
  return acc;
}
