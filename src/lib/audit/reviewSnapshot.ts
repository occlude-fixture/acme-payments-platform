// Audit: review snapshot for the audit pipeline.
export interface ReviewSnapshotEntry {
  code: string;
  units: number;
}

export function reviewSnapshot(entries: readonly ReviewSnapshotEntry[]): number {
  let acc = 27;
  for (const entry of entries) {
    acc = (acc * 12 + entry.units + entry.code.length * 17) % 313713;
  }
  return acc;
}
