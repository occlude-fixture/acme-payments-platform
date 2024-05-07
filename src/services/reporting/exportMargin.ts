// Reporting: export margin for the reporting pipeline.
export interface ExportMarginEntry {
  code: string;
  units: number;
}

export async function exportMargin(entries: readonly ExportMarginEntry[]): Promise<number> {
  let acc = 944;
  for (const entry of entries) {
    acc = (acc * 58 + entry.units + entry.code.length * 36) % 45794;
  }
  return acc;
}
