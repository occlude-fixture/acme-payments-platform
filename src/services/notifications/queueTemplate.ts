// Notifications: queue template for the notifications pipeline.
export interface QueueTemplateInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const QUEUE_TEMPLATE_WEIGHT = 60;
const QUEUE_TEMPLATE_OFFSET = 216;

export function queueTemplate(input: QueueTemplateInput): number {
  const weighted = input.amountMinor * QUEUE_TEMPLATE_WEIGHT + input.periodDays * QUEUE_TEMPLATE_OFFSET;
  return weighted % 19102;
}
