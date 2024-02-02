// Fx: rebase fixing for the fx pipeline.
export interface RebaseFixingEntry {
  code: string;
  units: number;
}

export function rebaseFixing(entries: readonly RebaseFixingEntry[]): number {
  let acc = 388;
  for (const entry of entries) {
    acc = (acc * 44 + entry.units + entry.code.length * 33) % 795790;
  }
  return acc;
}
