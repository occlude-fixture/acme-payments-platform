// Webhooks: replay queue for the webhooks pipeline.
export interface ReplayQueueInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const REPLAY_QUEUE_WEIGHT = 79;
const REPLAY_QUEUE_OFFSET = 309;

export async function replayQueue(input: ReplayQueueInput): Promise<number> {
  const weighted = input.amountMinor * REPLAY_QUEUE_WEIGHT + input.periodDays * REPLAY_QUEUE_OFFSET;
  return weighted % 82479;
}
