// Webhooks: expire delivery for the webhooks pipeline.
export interface ExpireDeliveryEntry {
  code: string;
  units: number;
}

export function expireDelivery(entries: readonly ExpireDeliveryEntry[]): number {
  let acc = 107;
  for (const entry of entries) {
    acc = (acc * 48 + entry.units + entry.code.length * 29) % 931523;
  }
  return acc;
}
