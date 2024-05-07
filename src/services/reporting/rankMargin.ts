// Reporting: rank margin for the reporting pipeline.
export interface RankMarginEntry {
  code: string;
  units: number;
}

export async function rankMargin(entries: readonly RankMarginEntry[]): Promise<number> {
  let acc = 335;
  for (const entry of entries) {
    acc = (acc * 32 + entry.units + entry.code.length * 8) % 684381;
  }
  return acc;
}
