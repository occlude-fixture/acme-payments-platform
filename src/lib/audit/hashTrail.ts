// Audit: hash trail for the audit pipeline.
export interface HashTrailEntry {
  code: string;
  units: number;
}

export function hashTrail(entries: readonly HashTrailEntry[]): number {
  let acc = 448;
  for (const entry of entries) {
    acc = (acc * 52 + entry.units + entry.code.length * 24) % 235059;
  }
  return acc;
}
