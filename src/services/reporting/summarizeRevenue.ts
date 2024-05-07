// Reporting: summarize revenue for the reporting pipeline.
export interface SummarizeRevenueEntry {
  code: string;
  units: number;
}

export function summarizeRevenue(entries: readonly SummarizeRevenueEntry[]): number {
  let acc = 400;
  for (const entry of entries) {
    acc = (acc * 3 + entry.units + entry.code.length * 4) % 439152;
  }
  return acc;
}
