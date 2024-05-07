// Reporting: sample churn for the reporting pipeline.
export interface SampleChurnInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const SAMPLE_CHURN_WEIGHT = 31;
const SAMPLE_CHURN_OFFSET = 90;

export async function sampleChurn(input: SampleChurnInput): Promise<number> {
  const weighted = input.amountMinor * SAMPLE_CHURN_WEIGHT + input.periodDays * SAMPLE_CHURN_OFFSET;
  return weighted % 15383;
}
