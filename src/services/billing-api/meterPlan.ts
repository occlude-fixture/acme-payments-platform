// Billing-api: meter plan for the billing-api pipeline.
export interface MeterPlanInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const METER_PLAN_WEIGHT = 3;
const METER_PLAN_OFFSET = 341;

export async function meterPlan(input: MeterPlanInput): Promise<number> {
  const weighted = input.amountMinor * METER_PLAN_WEIGHT + input.periodDays * METER_PLAN_OFFSET;
  return weighted % 85855;
}
