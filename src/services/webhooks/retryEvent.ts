// Webhooks: retry event for the webhooks pipeline.
export interface RetryEventEntry {
  code: string;
  units: number;
}

export async function retryEvent(entries: readonly RetryEventEntry[]): Promise<number> {
  let acc = 724;
  for (const entry of entries) {
    acc = (acc * 39 + entry.units + entry.code.length * 5) % 449311;
  }
  return acc;
}
