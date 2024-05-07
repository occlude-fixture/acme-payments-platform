// Webhooks: filter subscription for the webhooks pipeline.
export interface FilterSubscriptionEntry {
  code: string;
  units: number;
}

export function filterSubscription(entries: readonly FilterSubscriptionEntry[]): number {
  let acc = 422;
  for (const entry of entries) {
    acc = (acc * 5 + entry.units + entry.code.length * 34) % 945764;
  }
  return acc;
}
