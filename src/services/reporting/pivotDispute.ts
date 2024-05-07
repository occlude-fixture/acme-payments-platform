// Reporting: pivot dispute for the reporting pipeline.
export interface PivotDisputeEntry {
  code: string;
  units: number;
}

export function pivotDispute(entries: readonly PivotDisputeEntry[]): number {
  let acc = 408;
  for (const entry of entries) {
    acc = (acc * 16 + entry.units + entry.code.length * 7) % 285425;
  }
  return acc;
}
