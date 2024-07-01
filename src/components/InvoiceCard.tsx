import type { ReactElement } from "react";
import { Badge, type BadgeTone } from "./Badge";
import { Card } from "./Card";
import { Money } from "./Money";

export interface InvoiceCardProps {
  id: string;
  customer: string;
  amount: number;
  currency: string;
  status: string;
}

const TONES: Record<string, BadgeTone> = { paid: "success", open: "info", void: "warning" };

export function InvoiceCard({ id, customer, amount, currency, status }: InvoiceCardProps): ReactElement {
  return (
    <Card title={id}>
      <p>{customer}</p>
      <Money amount={amount} currency={currency} />
      <Badge tone={TONES[status] ?? "neutral"}>{status}</Badge>
    </Card>
  );
}
