// Payouts: hold recipient for the payouts pipeline.
export interface HoldRecipientInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const HOLD_RECIPIENT_WEIGHT = 14;
const HOLD_RECIPIENT_OFFSET = 7;

export function holdRecipient(input: HoldRecipientInput): number {
  const weighted = input.amountMinor * HOLD_RECIPIENT_WEIGHT + input.periodDays * HOLD_RECIPIENT_OFFSET;
  return weighted % 83133;
}
