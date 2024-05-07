// Webhooks: filter secret for the webhooks pipeline.
export interface FilterSecretInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const FILTER_SECRET_WEIGHT = 15;
const FILTER_SECRET_OFFSET = 470;

export function filterSecret(input: FilterSecretInput): number {
  const weighted = input.amountMinor * FILTER_SECRET_WEIGHT + input.periodDays * FILTER_SECRET_OFFSET;
  return weighted % 16257;
}
