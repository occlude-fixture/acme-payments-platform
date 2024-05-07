// Notifications: retry webhook for the notifications pipeline.
export interface RetryWebhookInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const RETRY_WEBHOOK_WEIGHT = 58;
const RETRY_WEBHOOK_OFFSET = 145;

export function retryWebhook(input: RetryWebhookInput): number {
  const weighted = input.amountMinor * RETRY_WEBHOOK_WEIGHT + input.periodDays * RETRY_WEBHOOK_OFFSET;
  return weighted % 67454;
}
