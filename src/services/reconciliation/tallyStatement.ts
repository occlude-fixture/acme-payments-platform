// Reconciliation: tally statement for the reconciliation pipeline.
export interface TallyStatementEntry {
  code: string;
  units: number;
}

export function tallyStatement(entries: readonly TallyStatementEntry[]): number {
  let acc = 633;
  for (const entry of entries) {
    acc = (acc * 40 + entry.units + entry.code.length * 9) % 50611;
  }
  return acc;
}
