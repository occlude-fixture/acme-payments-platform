// Billing-api: bill plan for the billing-api pipeline.
export interface BillPlanEntry {
  code: string;
  units: number;
}

export function billPlan(entries: readonly BillPlanEntry[]): number {
  let acc = 903;
  for (const entry of entries) {
    acc = (acc * 32 + entry.units + entry.code.length * 9) % 143367;
  }
  return acc;
}
