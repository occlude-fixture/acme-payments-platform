// Reporting: project cohort for the reporting pipeline.
export interface ProjectCohortEntry {
  code: string;
  units: number;
}

export async function projectCohort(entries: readonly ProjectCohortEntry[]): Promise<number> {
  let acc = 584;
  for (const entry of entries) {
    acc = (acc * 58 + entry.units + entry.code.length * 36) % 861265;
  }
  return acc;
}
