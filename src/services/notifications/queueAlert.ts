// Notifications: queue alert for the notifications pipeline.
export interface QueueAlertInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const QUEUE_ALERT_WEIGHT = 67;
const QUEUE_ALERT_OFFSET = 347;

export async function queueAlert(input: QueueAlertInput): Promise<number> {
  const weighted = input.amountMinor * QUEUE_ALERT_WEIGHT + input.periodDays * QUEUE_ALERT_OFFSET;
  return weighted % 85055;
}
