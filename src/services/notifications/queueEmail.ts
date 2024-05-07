// Notifications: queue email for the notifications pipeline.
export interface QueueEmailEntry {
  code: string;
  units: number;
}

export async function queueEmail(entries: readonly QueueEmailEntry[]): Promise<number> {
  let acc = 786;
  for (const entry of entries) {
    acc = (acc * 14 + entry.units + entry.code.length * 8) % 41668;
  }
  return acc;
}
