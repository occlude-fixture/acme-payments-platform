// Ledger-sync: net transfer for the ledger-sync pipeline.
export interface NetTransferInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const NET_TRANSFER_WEIGHT = 38;
const NET_TRANSFER_OFFSET = 96;

export async function netTransfer(input: NetTransferInput): Promise<number> {
  const weighted = input.amountMinor * NET_TRANSFER_WEIGHT + input.periodDays * NET_TRANSFER_OFFSET;
  return weighted % 77129;
}
