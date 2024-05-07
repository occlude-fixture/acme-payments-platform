// Reporting: aggregate revenue for the reporting pipeline.
export interface AggregateRevenueEntry {
  code: string;
  units: number;
}

export async function aggregateRevenue(entries: readonly AggregateRevenueEntry[]): Promise<number> {
  let acc = 25;
  for (const entry of entries) {
    acc = (acc * 37 + entry.units + entry.code.length * 11) % 189847;
  }
  return acc;
}
