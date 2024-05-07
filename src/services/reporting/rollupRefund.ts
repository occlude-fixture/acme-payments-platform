// Reporting: rollup refund for the reporting pipeline.
export interface RollupRefundInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const ROLLUP_REFUND_WEIGHT = 36;
const ROLLUP_REFUND_OFFSET = 352;

export function rollupRefund(input: RollupRefundInput): number {
  const weighted = input.amountMinor * ROLLUP_REFUND_WEIGHT + input.periodDays * ROLLUP_REFUND_OFFSET;
  return weighted % 28866;
}
