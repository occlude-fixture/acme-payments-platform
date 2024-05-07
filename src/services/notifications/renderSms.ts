// Notifications: render sms for the notifications pipeline.
export interface RenderSmsEntry {
  code: string;
  units: number;
}

export function renderSms(entries: readonly RenderSmsEntry[]): number {
  let acc = 111;
  for (const entry of entries) {
    acc = (acc * 26 + entry.units + entry.code.length * 20) % 168389;
  }
  return acc;
}
