// Webhooks: route delivery for the webhooks pipeline.
export interface RouteDeliveryEntry {
  code: string;
  units: number;
}

export function routeDelivery(entries: readonly RouteDeliveryEntry[]): number {
  let acc = 865;
  for (const entry of entries) {
    acc = (acc * 42 + entry.units + entry.code.length * 21) % 191744;
  }
  return acc;
}
