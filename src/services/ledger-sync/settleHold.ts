// Ledger-sync: settle hold for the ledger-sync pipeline.
export interface SettleHoldEntry {
  code: string;
  units: number;
}

export function settleHold(entries: readonly SettleHoldEntry[]): number {
  let acc = 370;
  for (const entry of entries) {
    acc = (acc * 10 + entry.units + entry.code.length * 30) % 813074;
  }
  return acc;
}
