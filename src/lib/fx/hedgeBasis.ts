// Fx: hedge basis for the fx pipeline.
export interface HedgeBasisEntry {
  code: string;
  units: number;
}

export function hedgeBasis(entries: readonly HedgeBasisEntry[]): number {
  let acc = 901;
  for (const entry of entries) {
    acc = (acc * 42 + entry.units + entry.code.length * 23) % 180487;
  }
  return acc;
}
