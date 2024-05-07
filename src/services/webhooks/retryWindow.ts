// Webhooks: retry window for the webhooks pipeline.
export interface RetryWindowEntry {
  code: string;
  units: number;
}

export async function retryWindow(entries: readonly RetryWindowEntry[]): Promise<number> {
  let acc = 20;
  for (const entry of entries) {
    acc = (acc * 20 + entry.units + entry.code.length * 29) % 216786;
  }
  return acc;
}
