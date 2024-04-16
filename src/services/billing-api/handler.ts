import { calculateInvoice, type InvoiceInput } from "@/lib/billing/calculateInvoice";
import { screenInvoice } from "@/lib/billing/fraudRules";
import { summarizeInvoice } from "@/web/invoices/summarizeInvoice";

interface InvoiceRow {
  id: string;
  customer: string;
  currency: string;
  totalMinor: number;
  status: "draft" | "open" | "paid" | "void";
}

interface CustomerRow {
  id: string;
  name: string;
  country: string;
  openInvoices: number;
}

const INVOICES: InvoiceRow[] = [
  { id: "inv_1001", customer: "Globex Retail", currency: "USD", totalMinor: 97_458, status: "paid" },
  { id: "inv_1002", customer: "Initech Labs", currency: "EUR", totalMinor: 90_362, status: "open" },
  { id: "inv_1003", customer: "Umbrella Freight", currency: "GBP", totalMinor: 41_200, status: "open" },
  { id: "inv_1004", customer: "Hooli Cloud", currency: "USD", totalMinor: 1_284_900, status: "draft" },
  { id: "inv_1005", customer: "Vandelay Imports", currency: "USD", totalMinor: 12_000, status: "void" },
];

const CUSTOMERS: CustomerRow[] = [
  { id: "cus_demo_001", name: "Globex Retail", country: "US", openInvoices: 0 },
  { id: "cus_demo_002", name: "Initech Labs", country: "DE", openInvoices: 1 },
  { id: "cus_demo_003", name: "Umbrella Freight", country: "GB", openInvoices: 1 },
  { id: "cus_demo_004", name: "Hooli Cloud", country: "US", openInvoices: 2 },
];

const SETTLEMENT_API = "http://settlement.acme.test";

export async function handle(route: string, body: unknown): Promise<unknown> {
  switch (route) {
    case "billing/calculateInvoice":
      return calculateInvoice(body as InvoiceInput);
    case "billing/summarizeInvoice":
      return summarizeInvoice(body as InvoiceInput);
    case "billing/screen": {
      const input = body as { customerId: string; totalMinor: number; lineCount: number };
      return screenInvoice(input.customerId, input.totalMinor, input.lineCount);
    }
    case "billing/listInvoices":
      return INVOICES.slice(0, (body as { limit?: number }).limit ?? INVOICES.length);
    case "billing/listCustomers":
      return CUSTOMERS;
    case "billing/settlementStatus": {
      // The settlement provider's status API; the token comes from the
      // environment, as in production.
      const res = await fetch(`${SETTLEMENT_API}/v1/settlements/status`, {
        headers: { Authorization: `Bearer ${process.env.ACME_SETTLEMENT_TOKEN}` },
      });
      if (!res.ok) throw new Error(`settlement status: ${res.status}`);
      return res.json();
    }
    default:
      throw new Error(`unknown route ${route}`);
  }
}
