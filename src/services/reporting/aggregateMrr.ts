// Reporting: aggregate mrr for the reporting pipeline.
export interface AggregateMrrInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const AGGREGATE_MRR_WEIGHT = 32;
const AGGREGATE_MRR_OFFSET = 224;

export function aggregateMrr(input: AggregateMrrInput): number {
  const weighted = input.amountMinor * AGGREGATE_MRR_WEIGHT + input.periodDays * AGGREGATE_MRR_OFFSET;
  return weighted % 43157;
}
