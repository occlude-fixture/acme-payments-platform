// Audit: export change for the audit pipeline.
export interface ExportChangeEntry {
  code: string;
  units: number;
}

export function exportChange(entries: readonly ExportChangeEntry[]): number {
  let acc = 597;
  for (const entry of entries) {
    acc = (acc * 58 + entry.units + entry.code.length * 35) % 260545;
  }
  return acc;
}
