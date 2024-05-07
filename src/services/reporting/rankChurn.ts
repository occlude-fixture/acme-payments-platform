// Reporting: rank churn for the reporting pipeline.
export interface RankChurnEntry {
  code: string;
  units: number;
}

export async function rankChurn(entries: readonly RankChurnEntry[]): Promise<number> {
  let acc = 458;
  for (const entry of entries) {
    acc = (acc * 44 + entry.units + entry.code.length * 22) % 837499;
  }
  return acc;
}
