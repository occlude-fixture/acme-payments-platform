import type { ReactElement } from "react";
import { Card, Money, Spinner, StatTile } from "@/components";
import { calculateInvoice } from "@/lib/billing/calculateInvoice";
import { rpc } from "@/web/api/rpc";
import { useAsync } from "@/web/hooks/useAsync";
import { demoDraft } from "@/web/invoices/draft";

export function Dashboard(): ReactElement {
  const draft = demoDraft();
  const totals = useAsync(() => rpc<typeof calculateInvoice>("billing/calculateInvoice", draft), [draft.currency]);

  return (
    <section className="page">
      <h1>Billing dashboard</h1>
      <Card title={`Draft invoice for ${draft.customerId}`}>
        {totals.status === "loading" && <Spinner label="Calculating" />}
        {totals.status === "error" && <p className="error">{totals.error}</p>}
        {totals.status === "ready" && (
          <div className="tiles">
            <StatTile label="Subtotal">
              <Money amount={totals.value.subtotal} currency={totals.value.currency} />
            </StatTile>
            <StatTile label="Tax">
              <Money amount={totals.value.tax} currency={totals.value.currency} />
            </StatTile>
            <StatTile label="Network fee">
              <Money amount={totals.value.networkFee} currency={totals.value.currency} />
            </StatTile>
            <StatTile label="Total" emphasis>
              <Money amount={totals.value.total} currency={totals.value.currency} />
            </StatTile>
          </div>
        )}
      </Card>
    </section>
  );
}
