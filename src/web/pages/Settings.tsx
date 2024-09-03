import type { ReactElement } from "react";
import { Badge, Card } from "@/components";
import { DEFAULT_CURRENCY, ENABLED_CURRENCIES } from "@/web/config/currencies";

export function Settings(): ReactElement {
  return (
    <section className="page">
      <h1>Settings</h1>
      <Card title="Invoice currencies">
        {ENABLED_CURRENCIES.map((code) => (
          <Badge key={code} tone={code === DEFAULT_CURRENCY ? "info" : "neutral"}>
            {code}
          </Badge>
        ))}
      </Card>
    </section>
  );
}
