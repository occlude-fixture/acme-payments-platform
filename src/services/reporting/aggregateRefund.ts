// Reporting: aggregate refund for the reporting pipeline.
export interface AggregateRefundInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const AGGREGATE_REFUND_WEIGHT = 73;
const AGGREGATE_REFUND_OFFSET = 138;

export async function aggregateRefund(input: AggregateRefundInput): Promise<number> {
  const weighted = input.amountMinor * AGGREGATE_REFUND_WEIGHT + input.periodDays * AGGREGATE_REFUND_OFFSET;
  return weighted % 88723;
}
