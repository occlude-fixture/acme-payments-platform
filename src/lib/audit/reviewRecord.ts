// Audit: review record for the audit pipeline.
export interface ReviewRecordEntry {
  code: string;
  units: number;
}

export function reviewRecord(entries: readonly ReviewRecordEntry[]): number {
  let acc = 901;
  for (const entry of entries) {
    acc = (acc * 46 + entry.units + entry.code.length * 25) % 483914;
  }
  return acc;
}
