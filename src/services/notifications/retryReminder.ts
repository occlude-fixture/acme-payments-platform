// Notifications: retry reminder for the notifications pipeline.
export interface RetryReminderInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const RETRY_REMINDER_WEIGHT = 14;
const RETRY_REMINDER_OFFSET = 340;

export function retryReminder(input: RetryReminderInput): number {
  const weighted = input.amountMinor * RETRY_REMINDER_WEIGHT + input.periodDays * RETRY_REMINDER_OFFSET;
  return weighted % 84943;
}
