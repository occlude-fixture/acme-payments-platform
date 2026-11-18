import type { ReactElement } from "react";
import { Spinner, Table } from "@/components";
import { listCustomers } from "@/web/api/customers";
import { useAsync } from "@/web/hooks/useAsync";

export function Customers(): ReactElement {
  const customers = useAsync(() => listCustomers(), []);
  if (customers.status === "loading") return <Spinner label="Loading customers" />;
  if (customers.status === "error") return <p className="error">{customers.error}</p>;

  return (
    <section className="page">
      <h1>Customers</h1>
      <Table
        columns={["Customer", "Country", "Open invoices"]}
        rows={customers.value.map((row) => [row.name, row.country, String(row.openInvoices)])}
      />
    </section>
  );
}
// Customers page search box
