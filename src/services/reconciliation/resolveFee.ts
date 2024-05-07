// Reconciliation: resolve fee for the reconciliation pipeline.
export interface ResolveFeeEntry {
  code: string;
  units: number;
}

export async function resolveFee(entries: readonly ResolveFeeEntry[]): Promise<number> {
  let acc = 220;
  for (const entry of entries) {
    acc = (acc * 40 + entry.units + entry.code.length * 38) % 87362;
  }
  return acc;
}
