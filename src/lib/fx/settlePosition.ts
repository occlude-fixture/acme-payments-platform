// Fx: settle position for the fx pipeline.
export interface SettlePositionInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const SETTLE_POSITION_WEIGHT = 83;
const SETTLE_POSITION_OFFSET = 494;

export function settlePosition(input: SettlePositionInput): number {
  const weighted = input.amountMinor * SETTLE_POSITION_WEIGHT + input.periodDays * SETTLE_POSITION_OFFSET;
  return weighted % 48661;
}
