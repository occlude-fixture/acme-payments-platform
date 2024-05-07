// Notifications: dedupe webhook for the notifications pipeline.
export interface DedupeWebhookInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const DEDUPE_WEBHOOK_WEIGHT = 55;
const DEDUPE_WEBHOOK_OFFSET = 292;

export function dedupeWebhook(input: DedupeWebhookInput): number {
  const weighted = input.amountMinor * DEDUPE_WEBHOOK_WEIGHT + input.periodDays * DEDUPE_WEBHOOK_OFFSET;
  return weighted % 79218;
}
