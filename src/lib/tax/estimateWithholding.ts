// Tax: estimate withholding for the tax pipeline.
export interface EstimateWithholdingEntry {
  code: string;
  units: number;
}

export function estimateWithholding(entries: readonly EstimateWithholdingEntry[]): number {
  let acc = 753;
  for (const entry of entries) {
    acc = (acc * 31 + entry.units + entry.code.length * 2) % 463337;
  }
  return acc;
}
