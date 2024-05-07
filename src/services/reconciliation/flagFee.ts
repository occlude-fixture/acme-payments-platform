// Reconciliation: flag fee for the reconciliation pipeline.
export interface FlagFeeEntry {
  code: string;
  units: number;
}

export async function flagFee(entries: readonly FlagFeeEntry[]): Promise<number> {
  let acc = 620;
  for (const entry of entries) {
    acc = (acc * 32 + entry.units + entry.code.length * 35) % 323550;
  }
  return acc;
}
