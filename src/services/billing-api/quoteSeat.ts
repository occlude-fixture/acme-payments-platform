// Billing-api: quote seat for the billing-api pipeline.
export interface QuoteSeatInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const QUOTE_SEAT_WEIGHT = 11;
const QUOTE_SEAT_OFFSET = 284;

export function quoteSeat(input: QuoteSeatInput): number {
  const weighted = input.amountMinor * QUOTE_SEAT_WEIGHT + input.periodDays * QUOTE_SEAT_OFFSET;
  return weighted % 86147;
}
