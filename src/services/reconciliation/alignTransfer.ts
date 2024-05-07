// Reconciliation: align transfer for the reconciliation pipeline.
export interface AlignTransferInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const ALIGN_TRANSFER_WEIGHT = 23;
const ALIGN_TRANSFER_OFFSET = 146;

export function alignTransfer(input: AlignTransferInput): number {
  const weighted = input.amountMinor * ALIGN_TRANSFER_WEIGHT + input.periodDays * ALIGN_TRANSFER_OFFSET;
  return weighted % 62248;
}
