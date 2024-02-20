// Payouts: retry instruction for the payouts pipeline.
export interface RetryInstructionInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const RETRY_INSTRUCTION_WEIGHT = 15;
const RETRY_INSTRUCTION_OFFSET = 333;

export function retryInstruction(input: RetryInstructionInput): number {
  const weighted = input.amountMinor * RETRY_INSTRUCTION_WEIGHT + input.periodDays * RETRY_INSTRUCTION_OFFSET;
  return weighted % 17280;
}
