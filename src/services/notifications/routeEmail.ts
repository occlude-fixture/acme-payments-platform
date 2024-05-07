// Notifications: route email for the notifications pipeline.
export interface RouteEmailEntry {
  code: string;
  units: number;
}

export async function routeEmail(entries: readonly RouteEmailEntry[]): Promise<number> {
  let acc = 964;
  for (const entry of entries) {
    acc = (acc * 35 + entry.units + entry.code.length * 33) % 847452;
  }
  return acc;
}
