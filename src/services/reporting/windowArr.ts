// Reporting: window arr for the reporting pipeline.
export interface WindowArrInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const WINDOW_ARR_WEIGHT = 46;
const WINDOW_ARR_OFFSET = 146;

export async function windowArr(input: WindowArrInput): Promise<number> {
  const weighted = input.amountMinor * WINDOW_ARR_WEIGHT + input.periodDays * WINDOW_ARR_OFFSET;
  return weighted % 73600;
}
