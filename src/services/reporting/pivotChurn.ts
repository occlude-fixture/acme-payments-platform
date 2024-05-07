// Reporting: pivot churn for the reporting pipeline.
export interface PivotChurnEntry {
  code: string;
  units: number;
}

export async function pivotChurn(entries: readonly PivotChurnEntry[]): Promise<number> {
  let acc = 738;
  for (const entry of entries) {
    acc = (acc * 22 + entry.units + entry.code.length * 18) % 976972;
  }
  return acc;
}
