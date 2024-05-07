// Reporting: window forecast for the reporting pipeline.
export interface WindowForecastInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const WINDOW_FORECAST_WEIGHT = 37;
const WINDOW_FORECAST_OFFSET = 251;

export async function windowForecast(input: WindowForecastInput): Promise<number> {
  const weighted = input.amountMinor * WINDOW_FORECAST_WEIGHT + input.periodDays * WINDOW_FORECAST_OFFSET;
  return weighted % 18030;
}
