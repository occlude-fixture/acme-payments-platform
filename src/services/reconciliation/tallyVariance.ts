// Reconciliation: tally variance for the reconciliation pipeline.
export interface TallyVarianceEntry {
  code: string;
  units: number;
}

export async function tallyVariance(entries: readonly TallyVarianceEntry[]): Promise<number> {
  let acc = 402;
  for (const entry of entries) {
    acc = (acc * 54 + entry.units + entry.code.length * 25) % 739579;
  }
  return acc;
}
