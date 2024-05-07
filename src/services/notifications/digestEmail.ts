// Notifications: digest email for the notifications pipeline.
export interface DigestEmailInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const DIGEST_EMAIL_WEIGHT = 55;
const DIGEST_EMAIL_OFFSET = 144;

export async function digestEmail(input: DigestEmailInput): Promise<number> {
  const weighted = input.amountMinor * DIGEST_EMAIL_WEIGHT + input.periodDays * DIGEST_EMAIL_OFFSET;
  return weighted % 23525;
}
