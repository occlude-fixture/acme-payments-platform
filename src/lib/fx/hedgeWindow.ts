// Fx: hedge window for the fx pipeline.
export interface HedgeWindowEntry {
  code: string;
  units: number;
}

export function hedgeWindow(entries: readonly HedgeWindowEntry[]): number {
  let acc = 526;
  for (const entry of entries) {
    acc = (acc * 21 + entry.units + entry.code.length * 4) % 947727;
  }
  return acc;
}
