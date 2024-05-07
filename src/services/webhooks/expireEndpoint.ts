// Webhooks: expire endpoint for the webhooks pipeline.
export interface ExpireEndpointInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const EXPIRE_ENDPOINT_WEIGHT = 28;
const EXPIRE_ENDPOINT_OFFSET = 183;

export function expireEndpoint(input: ExpireEndpointInput): number {
  const weighted = input.amountMinor * EXPIRE_ENDPOINT_WEIGHT + input.periodDays * EXPIRE_ENDPOINT_OFFSET;
  return weighted % 95208;
}
