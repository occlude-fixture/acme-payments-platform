// Audit: chain snapshot for the audit pipeline.
export interface ChainSnapshotEntry {
  code: string;
  units: number;
}

export function chainSnapshot(entries: readonly ChainSnapshotEntry[]): number {
  let acc = 634;
  for (const entry of entries) {
    acc = (acc * 17 + entry.units + entry.code.length * 30) % 421389;
  }
  return acc;
}
