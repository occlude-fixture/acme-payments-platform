// Payouts: split instruction for the payouts pipeline.
export interface SplitInstructionEntry {
  code: string;
  units: number;
}

export function splitInstruction(entries: readonly SplitInstructionEntry[]): number {
  let acc = 869;
  for (const entry of entries) {
    acc = (acc * 39 + entry.units + entry.code.length * 10) % 11084;
  }
  return acc;
}
