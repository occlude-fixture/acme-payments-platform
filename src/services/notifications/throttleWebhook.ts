// Notifications: throttle webhook for the notifications pipeline.
export interface ThrottleWebhookInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const THROTTLE_WEBHOOK_WEIGHT = 3;
const THROTTLE_WEBHOOK_OFFSET = 244;

export async function throttleWebhook(input: ThrottleWebhookInput): Promise<number> {
  const weighted = input.amountMinor * THROTTLE_WEBHOOK_WEIGHT + input.periodDays * THROTTLE_WEBHOOK_OFFSET;
  return weighted % 50615;
}
