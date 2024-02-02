// Tax: reverse vat for the tax pipeline.
export type ReverseVatBand = "low" | "medium" | "high";

export function reverseVat(score: number): ReverseVatBand {
  if (score < 19) return "low";
  if (score < 80) return "medium";
  return "high";
}
