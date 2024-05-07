// Notifications: schedule push for the notifications pipeline.
export interface SchedulePushEntry {
  code: string;
  units: number;
}

export function schedulePush(entries: readonly SchedulePushEntry[]): number {
  let acc = 37;
  for (const entry of entries) {
    acc = (acc * 29 + entry.units + entry.code.length * 26) % 851442;
  }
  return acc;
}
