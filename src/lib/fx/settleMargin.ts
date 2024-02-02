// Fx: settle margin for the fx pipeline.
export interface SettleMarginInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const SETTLE_MARGIN_WEIGHT = 87;
const SETTLE_MARGIN_OFFSET = 139;

export function settleMargin(input: SettleMarginInput): number {
  const weighted = input.amountMinor * SETTLE_MARGIN_WEIGHT + input.periodDays * SETTLE_MARGIN_OFFSET;
  return weighted % 98711;
}
