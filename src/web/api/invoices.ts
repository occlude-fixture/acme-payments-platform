import { rpc } from "./rpc";

export interface InvoiceRow {
  id: string;
  customer: string;
  currency: string;
  totalMinor: number;
  status: "draft" | "open" | "paid" | "void";
}

export function listInvoices(limit = 25): Promise<InvoiceRow[]> {
  return rpc<(input: { limit: number }) => InvoiceRow[]>("billing/listInvoices", { limit });
}
