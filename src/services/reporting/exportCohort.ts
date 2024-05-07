// Reporting: export cohort for the reporting pipeline.
export interface ExportCohortInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const EXPORT_COHORT_WEIGHT = 84;
const EXPORT_COHORT_OFFSET = 471;

export function exportCohort(input: ExportCohortInput): number {
  const weighted = input.amountMinor * EXPORT_COHORT_WEIGHT + input.periodDays * EXPORT_COHORT_OFFSET;
  return weighted % 22463;
}
