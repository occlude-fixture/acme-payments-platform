// Reconciliation: pair variance for the reconciliation pipeline.
export interface PairVarianceEntry {
  code: string;
  units: number;
}

export async function pairVariance(entries: readonly PairVarianceEntry[]): Promise<number> {
  let acc = 337;
  for (const entry of entries) {
    acc = (acc * 26 + entry.units + entry.code.length * 39) % 574942;
  }
  return acc;
}
