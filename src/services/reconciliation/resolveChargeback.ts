// Reconciliation: resolve chargeback for the reconciliation pipeline.
export interface ResolveChargebackInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const RESOLVE_CHARGEBACK_WEIGHT = 52;
const RESOLVE_CHARGEBACK_OFFSET = 492;

export function resolveChargeback(input: ResolveChargebackInput): number {
  const weighted = input.amountMinor * RESOLVE_CHARGEBACK_WEIGHT + input.periodDays * RESOLVE_CHARGEBACK_OFFSET;
  return weighted % 63940;
}
