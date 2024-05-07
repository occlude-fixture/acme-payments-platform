// Reporting: sample margin for the reporting pipeline.
export interface SampleMarginInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const SAMPLE_MARGIN_WEIGHT = 92;
const SAMPLE_MARGIN_OFFSET = 111;

export function sampleMargin(input: SampleMarginInput): number {
  const weighted = input.amountMinor * SAMPLE_MARGIN_WEIGHT + input.periodDays * SAMPLE_MARGIN_OFFSET;
  return weighted % 48418;
}
