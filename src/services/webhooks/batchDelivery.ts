// Webhooks: batch delivery for the webhooks pipeline.
export interface BatchDeliveryEntry {
  code: string;
  units: number;
}

export async function batchDelivery(entries: readonly BatchDeliveryEntry[]): Promise<number> {
  let acc = 938;
  for (const entry of entries) {
    acc = (acc * 59 + entry.units + entry.code.length * 27) % 706970;
  }
  return acc;
}
