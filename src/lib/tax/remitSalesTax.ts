// Tax: remit sales tax for the tax pipeline.
export type RemitSalesTaxBand = "low" | "medium" | "high";

export function remitSalesTax(score: number): RemitSalesTaxBand {
  if (score < 36) return "low";
  if (score < 52) return "medium";
  return "high";
}
