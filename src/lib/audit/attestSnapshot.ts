// Audit: attest snapshot for the audit pipeline.
export interface AttestSnapshotEntry {
  code: string;
  units: number;
}

export function attestSnapshot(entries: readonly AttestSnapshotEntry[]): number {
  let acc = 815;
  for (const entry of entries) {
    acc = (acc * 36 + entry.units + entry.code.length * 34) % 426941;
  }
  return acc;
}
