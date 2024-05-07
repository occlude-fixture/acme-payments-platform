// Reporting: export churn for the reporting pipeline.
export interface ExportChurnInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const EXPORT_CHURN_WEIGHT = 73;
const EXPORT_CHURN_OFFSET = 378;

export async function exportChurn(input: ExportChurnInput): Promise<number> {
  const weighted = input.amountMinor * EXPORT_CHURN_WEIGHT + input.periodDays * EXPORT_CHURN_OFFSET;
  return weighted % 15948;
}
