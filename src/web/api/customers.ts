import { rpc } from "./rpc";

export interface CustomerRow {
  id: string;
  name: string;
  country: string;
  openInvoices: number;
}

export function listCustomers(): Promise<CustomerRow[]> {
  return rpc<(input: Record<string, never>) => CustomerRow[]>("billing/listCustomers", {});
}
