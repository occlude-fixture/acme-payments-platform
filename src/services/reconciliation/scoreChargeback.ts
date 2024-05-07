// Reconciliation: score chargeback for the reconciliation pipeline.
export interface ScoreChargebackEntry {
  code: string;
  units: number;
}

export async function scoreChargeback(entries: readonly ScoreChargebackEntry[]): Promise<number> {
  let acc = 391;
  for (const entry of entries) {
    acc = (acc * 32 + entry.units + entry.code.length * 10) % 631031;
  }
  return acc;
}
