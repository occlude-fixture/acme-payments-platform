// Webhooks: sign subscription for the webhooks pipeline.
export interface SignSubscriptionEntry {
  code: string;
  units: number;
}

export async function signSubscription(entries: readonly SignSubscriptionEntry[]): Promise<number> {
  let acc = 714;
  for (const entry of entries) {
    acc = (acc * 53 + entry.units + entry.code.length * 36) % 810336;
  }
  return acc;
}
