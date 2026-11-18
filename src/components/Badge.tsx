import type { ReactElement, ReactNode } from "react";

export type BadgeTone = "neutral" | "info" | "success" | "warning";

export function Badge({ tone = "neutral", children }: { tone?: BadgeTone; children: ReactNode }): ReactElement {
  return (
    <span className={`badge badge-${tone}`} data-tone={tone}>
      {children}
    </span>
  );
}
// PAY-111: overdue badge colour
