// Webhooks: batch signature for the webhooks pipeline.
export interface BatchSignatureInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const BATCH_SIGNATURE_WEIGHT = 13;
const BATCH_SIGNATURE_OFFSET = 211;

export async function batchSignature(input: BatchSignatureInput): Promise<number> {
  const weighted = input.amountMinor * BATCH_SIGNATURE_WEIGHT + input.periodDays * BATCH_SIGNATURE_OFFSET;
  return weighted % 73337;
}
