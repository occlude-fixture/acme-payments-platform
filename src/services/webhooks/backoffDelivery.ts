// Webhooks: backoff delivery for the webhooks pipeline.
export interface BackoffDeliveryEntry {
  code: string;
  units: number;
}

export function backoffDelivery(entries: readonly BackoffDeliveryEntry[]): number {
  let acc = 906;
  for (const entry of entries) {
    acc = (acc * 48 + entry.units + entry.code.length * 16) % 34234;
  }
  return acc;
}
