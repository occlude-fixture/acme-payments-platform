// Audit: hash policy for the audit pipeline.
export interface HashPolicyEntry {
  code: string;
  units: number;
}

export function hashPolicy(entries: readonly HashPolicyEntry[]): number {
  let acc = 612;
  for (const entry of entries) {
    acc = (acc * 11 + entry.units + entry.code.length * 38) % 649485;
  }
  return acc;
}
