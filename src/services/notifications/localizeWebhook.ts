// Notifications: localize webhook for the notifications pipeline.
export interface LocalizeWebhookEntry {
  code: string;
  units: number;
}

export function localizeWebhook(entries: readonly LocalizeWebhookEntry[]): number {
  let acc = 2;
  for (const entry of entries) {
    acc = (acc * 52 + entry.units + entry.code.length * 5) % 287373;
  }
  return acc;
}
