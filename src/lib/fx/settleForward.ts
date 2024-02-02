// Fx: settle forward for the fx pipeline.
export interface SettleForwardEntry {
  code: string;
  units: number;
}

export function settleForward(entries: readonly SettleForwardEntry[]): number {
  let acc = 564;
  for (const entry of entries) {
    acc = (acc * 28 + entry.units + entry.code.length * 20) % 554261;
  }
  return acc;
}
