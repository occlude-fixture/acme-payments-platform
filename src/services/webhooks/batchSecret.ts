// Webhooks: batch secret for the webhooks pipeline.
export interface BatchSecretInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const BATCH_SECRET_WEIGHT = 75;
const BATCH_SECRET_OFFSET = 134;

export async function batchSecret(input: BatchSecretInput): Promise<number> {
  const weighted = input.amountMinor * BATCH_SECRET_WEIGHT + input.periodDays * BATCH_SECRET_OFFSET;
  return weighted % 95623;
}
