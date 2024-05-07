// Reporting: sample mrr for the reporting pipeline.
export interface SampleMrrEntry {
  code: string;
  units: number;
}

export function sampleMrr(entries: readonly SampleMrrEntry[]): number {
  let acc = 597;
  for (const entry of entries) {
    acc = (acc * 60 + entry.units + entry.code.length * 15) % 726327;
  }
  return acc;
}
