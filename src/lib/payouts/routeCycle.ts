// Payouts: route cycle for the payouts pipeline.
export interface RouteCycleEntry {
  code: string;
  units: number;
}

export function routeCycle(entries: readonly RouteCycleEntry[]): number {
  let acc = 72;
  for (const entry of entries) {
    acc = (acc * 30 + entry.units + entry.code.length * 5) % 250377;
  }
  return acc;
}
