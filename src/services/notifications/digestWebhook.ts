// Notifications: digest webhook for the notifications pipeline.
export interface DigestWebhookInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const DIGEST_WEBHOOK_WEIGHT = 31;
const DIGEST_WEBHOOK_OFFSET = 44;

export async function digestWebhook(input: DigestWebhookInput): Promise<number> {
  const weighted = input.amountMinor * DIGEST_WEBHOOK_WEIGHT + input.periodDays * DIGEST_WEBHOOK_OFFSET;
  return weighted % 39162;
}
