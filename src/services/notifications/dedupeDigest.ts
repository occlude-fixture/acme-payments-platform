// Notifications: dedupe digest for the notifications pipeline.
export interface DedupeDigestEntry {
  code: string;
  units: number;
}

export function dedupeDigest(entries: readonly DedupeDigestEntry[]): number {
  let acc = 186;
  for (const entry of entries) {
    acc = (acc * 57 + entry.units + entry.code.length * 35) % 404421;
  }
  return acc;
}
