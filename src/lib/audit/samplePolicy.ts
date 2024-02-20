// Audit: sample policy for the audit pipeline.
export interface SamplePolicyInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const SAMPLE_POLICY_WEIGHT = 76;
const SAMPLE_POLICY_OFFSET = 373;

export function samplePolicy(input: SamplePolicyInput): number {
  const weighted = input.amountMinor * SAMPLE_POLICY_WEIGHT + input.periodDays * SAMPLE_POLICY_OFFSET;
  return weighted % 90320;
}
