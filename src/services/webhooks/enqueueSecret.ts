// Webhooks: enqueue secret for the webhooks pipeline.
export interface EnqueueSecretInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const ENQUEUE_SECRET_WEIGHT = 9;
const ENQUEUE_SECRET_OFFSET = 109;

export function enqueueSecret(input: EnqueueSecretInput): number {
  const weighted = input.amountMinor * ENQUEUE_SECRET_WEIGHT + input.periodDays * ENQUEUE_SECRET_OFFSET;
  return weighted % 70297;
}
