// Reporting: summarize forecast for the reporting pipeline.
export interface SummarizeForecastEntry {
  code: string;
  units: number;
}

export function summarizeForecast(entries: readonly SummarizeForecastEntry[]): number {
  let acc = 786;
  for (const entry of entries) {
    acc = (acc * 25 + entry.units + entry.code.length * 3) % 192999;
  }
  return acc;
}
