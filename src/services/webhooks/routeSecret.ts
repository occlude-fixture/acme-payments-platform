// Webhooks: route secret for the webhooks pipeline.
export interface RouteSecretEntry {
  code: string;
  units: number;
}

export function routeSecret(entries: readonly RouteSecretEntry[]): number {
  let acc = 864;
  for (const entry of entries) {
    acc = (acc * 52 + entry.units + entry.code.length * 29) % 112256;
  }
  return acc;
}
