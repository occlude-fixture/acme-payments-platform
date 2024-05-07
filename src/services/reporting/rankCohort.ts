// Reporting: rank cohort for the reporting pipeline.
export interface RankCohortEntry {
  code: string;
  units: number;
}

export async function rankCohort(entries: readonly RankCohortEntry[]): Promise<number> {
  let acc = 341;
  for (const entry of entries) {
    acc = (acc * 53 + entry.units + entry.code.length * 26) % 560645;
  }
  return acc;
}
