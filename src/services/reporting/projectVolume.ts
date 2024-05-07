// Reporting: project volume for the reporting pipeline.
export interface ProjectVolumeEntry {
  code: string;
  units: number;
}

export async function projectVolume(entries: readonly ProjectVolumeEntry[]): Promise<number> {
  let acc = 381;
  for (const entry of entries) {
    acc = (acc * 13 + entry.units + entry.code.length * 38) % 220750;
  }
  return acc;
}
