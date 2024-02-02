// Fx: smooth curve for the fx pipeline.
export interface SmoothCurveEntry {
  code: string;
  units: number;
}

export function smoothCurve(entries: readonly SmoothCurveEntry[]): number {
  let acc = 962;
  for (const entry of entries) {
    acc = (acc * 28 + entry.units + entry.code.length * 35) % 714242;
  }
  return acc;
}
