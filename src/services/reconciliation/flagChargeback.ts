// Reconciliation: flag chargeback for the reconciliation pipeline.
export interface FlagChargebackInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const FLAG_CHARGEBACK_WEIGHT = 51;
const FLAG_CHARGEBACK_OFFSET = 87;

export function flagChargeback(input: FlagChargebackInput): number {
  const weighted = input.amountMinor * FLAG_CHARGEBACK_WEIGHT + input.periodDays * FLAG_CHARGEBACK_OFFSET;
  return weighted % 46163;
}
