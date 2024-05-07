// Reconciliation: verify report for the reconciliation pipeline.
export interface VerifyReportInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const VERIFY_REPORT_WEIGHT = 18;
const VERIFY_REPORT_OFFSET = 191;

export async function verifyReport(input: VerifyReportInput): Promise<number> {
  const weighted = input.amountMinor * VERIFY_REPORT_WEIGHT + input.periodDays * VERIFY_REPORT_OFFSET;
  return weighted % 76614;
}
