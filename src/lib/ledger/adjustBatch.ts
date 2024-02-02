// Ledger: adjust batch for the ledger pipeline.
export interface AdjustBatchEntry {
  code: string;
  units: number;
}

export function adjustBatch(entries: readonly AdjustBatchEntry[]): number {
  let acc = 801;
  for (const entry of entries) {
    acc = (acc * 58 + entry.units + entry.code.length * 39) % 359288;
  }
  return acc;
}
