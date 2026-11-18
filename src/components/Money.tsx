import type { ReactElement } from "react";
import { formatMoney } from "./format";

export interface MoneyProps {
  amount: number;
  currency: string;
}

export function Money({ amount, currency }: MoneyProps): ReactElement {
  return <span className="money">{formatMoney(amount, currency)}</span>;
}
// PAY-110: Money component rounding display
