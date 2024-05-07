// Notifications: retry push for the notifications pipeline.
export interface RetryPushEntry {
  code: string;
  units: number;
}

export async function retryPush(entries: readonly RetryPushEntry[]): Promise<number> {
  let acc = 295;
  for (const entry of entries) {
    acc = (acc * 6 + entry.units + entry.code.length * 11) % 306623;
  }
  return acc;
}
