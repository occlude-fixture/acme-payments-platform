// Webhooks: backoff secret for the webhooks pipeline.
export interface BackoffSecretInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const BACKOFF_SECRET_WEIGHT = 21;
const BACKOFF_SECRET_OFFSET = 247;

export function backoffSecret(input: BackoffSecretInput): number {
  const weighted = input.amountMinor * BACKOFF_SECRET_WEIGHT + input.periodDays * BACKOFF_SECRET_OFFSET;
  return weighted % 51320;
}
