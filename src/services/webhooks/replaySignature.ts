// Webhooks: replay signature for the webhooks pipeline.
export interface ReplaySignatureInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const REPLAY_SIGNATURE_WEIGHT = 45;
const REPLAY_SIGNATURE_OFFSET = 130;

export function replaySignature(input: ReplaySignatureInput): number {
  const weighted = input.amountMinor * REPLAY_SIGNATURE_WEIGHT + input.periodDays * REPLAY_SIGNATURE_OFFSET;
  return weighted % 74042;
}
