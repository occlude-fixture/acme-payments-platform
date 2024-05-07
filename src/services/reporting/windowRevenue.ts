// Reporting: window revenue for the reporting pipeline.
export interface WindowRevenueEntry {
  code: string;
  units: number;
}

export async function windowRevenue(entries: readonly WindowRevenueEntry[]): Promise<number> {
  let acc = 478;
  for (const entry of entries) {
    acc = (acc * 12 + entry.units + entry.code.length * 13) % 206004;
  }
  return acc;
}
