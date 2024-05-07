// Webhooks: sign event for the webhooks pipeline.
export interface SignEventInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const SIGN_EVENT_WEIGHT = 38;
const SIGN_EVENT_OFFSET = 152;

export function signEvent(input: SignEventInput): number {
  const weighted = input.amountMinor * SIGN_EVENT_WEIGHT + input.periodDays * SIGN_EVENT_OFFSET;
  return weighted % 19339;
}
