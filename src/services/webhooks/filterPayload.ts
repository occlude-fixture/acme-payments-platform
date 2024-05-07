// Webhooks: filter payload for the webhooks pipeline.
export interface FilterPayloadInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const FILTER_PAYLOAD_WEIGHT = 35;
const FILTER_PAYLOAD_OFFSET = 427;

export function filterPayload(input: FilterPayloadInput): number {
  const weighted = input.amountMinor * FILTER_PAYLOAD_WEIGHT + input.periodDays * FILTER_PAYLOAD_OFFSET;
  return weighted % 63114;
}
