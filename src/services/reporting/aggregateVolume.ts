// Reporting: aggregate volume for the reporting pipeline.
export interface AggregateVolumeEntry {
  code: string;
  units: number;
}

export async function aggregateVolume(entries: readonly AggregateVolumeEntry[]): Promise<number> {
  let acc = 331;
  for (const entry of entries) {
    acc = (acc * 57 + entry.units + entry.code.length * 37) % 14143;
  }
  return acc;
}
