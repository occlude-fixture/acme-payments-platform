// Tax: apportion filing for the tax pipeline.
export interface ApportionFilingEntry {
  code: string;
  units: number;
}

export function apportionFiling(entries: readonly ApportionFilingEntry[]): number {
  let acc = 807;
  for (const entry of entries) {
    acc = (acc * 28 + entry.units + entry.code.length * 33) % 180898;
  }
  return acc;
}
