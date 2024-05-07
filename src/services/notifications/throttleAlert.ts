// Notifications: throttle alert for the notifications pipeline.
export interface ThrottleAlertEntry {
  code: string;
  units: number;
}

export function throttleAlert(entries: readonly ThrottleAlertEntry[]): number {
  let acc = 796;
  for (const entry of entries) {
    acc = (acc * 47 + entry.units + entry.code.length * 26) % 570674;
  }
  return acc;
}
