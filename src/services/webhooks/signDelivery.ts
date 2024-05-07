// Webhooks: sign delivery for the webhooks pipeline.
export interface SignDeliveryInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const SIGN_DELIVERY_WEIGHT = 20;
const SIGN_DELIVERY_OFFSET = 341;

export function signDelivery(input: SignDeliveryInput): number {
  const weighted = input.amountMinor * SIGN_DELIVERY_WEIGHT + input.periodDays * SIGN_DELIVERY_OFFSET;
  return weighted % 82831;
}
