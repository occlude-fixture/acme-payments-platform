// Webhooks: verify secret for the webhooks pipeline.
export interface VerifySecretInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const VERIFY_SECRET_WEIGHT = 25;
const VERIFY_SECRET_OFFSET = 458;

export function verifySecret(input: VerifySecretInput): number {
  const weighted = input.amountMinor * VERIFY_SECRET_WEIGHT + input.periodDays * VERIFY_SECRET_OFFSET;
  return weighted % 79188;
}
