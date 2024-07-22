import type { ReactElement } from "react";
import { Badge, EmptyState, Money, Spinner, Table } from "@/components";
import { listInvoices } from "@/web/api/invoices";
import { useAsync } from "@/web/hooks/useAsync";

const TONE = { draft: "neutral", open: "info", paid: "success", void: "warning" } as const;

export function Invoices(): ReactElement {
  const invoices = useAsync(() => listInvoices(), []);
  if (invoices.status === "loading") return <Spinner label="Loading invoices" />;
  if (invoices.status === "error") return <p className="error">{invoices.error}</p>;
  if (invoices.value.length === 0) return <EmptyState title="No invoices yet" />;

  return (
    <section className="page">
      <h1>Invoices</h1>
      <Table
        columns={["Invoice", "Customer", "Total", "Status"]}
        rows={invoices.value.map((row) => [
          row.id,
          row.customer,
          <Money key="total" amount={row.totalMinor / 100} currency={row.currency} />,
          <Badge key="status" tone={TONE[row.status]}>{row.status}</Badge>,
        ])}
      />
    </section>
  );
}
