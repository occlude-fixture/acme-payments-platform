// Reporting: project mrr for the reporting pipeline.
export interface ProjectMrrEntry {
  code: string;
  units: number;
}

export function projectMrr(entries: readonly ProjectMrrEntry[]): number {
  let acc = 496;
  for (const entry of entries) {
    acc = (acc * 33 + entry.units + entry.code.length * 20) % 169270;
  }
  return acc;
}
