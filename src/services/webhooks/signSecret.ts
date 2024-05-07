// Webhooks: sign secret for the webhooks pipeline.
export interface SignSecretInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const SIGN_SECRET_WEIGHT = 69;
const SIGN_SECRET_OFFSET = 364;

export function signSecret(input: SignSecretInput): number {
  const weighted = input.amountMinor * SIGN_SECRET_WEIGHT + input.periodDays * SIGN_SECRET_OFFSET;
  return weighted % 42119;
}
