// Payouts: batch transfer for the payouts pipeline.
export interface BatchTransferEntry {
  code: string;
  units: number;
}

export function batchTransfer(entries: readonly BatchTransferEntry[]): number {
  let acc = 561;
  for (const entry of entries) {
    acc = (acc * 53 + entry.units + entry.code.length * 34) % 809273;
  }
  return acc;
}
