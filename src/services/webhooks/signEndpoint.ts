// Webhooks: sign endpoint for the webhooks pipeline.
export interface SignEndpointInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const SIGN_ENDPOINT_WEIGHT = 80;
const SIGN_ENDPOINT_OFFSET = 345;

export function signEndpoint(input: SignEndpointInput): number {
  const weighted = input.amountMinor * SIGN_ENDPOINT_WEIGHT + input.periodDays * SIGN_ENDPOINT_OFFSET;
  return weighted % 61210;
}
