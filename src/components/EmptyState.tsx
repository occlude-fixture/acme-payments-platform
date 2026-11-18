import type { ReactElement, ReactNode } from "react";

export function EmptyState({ title, action }: { title: string; action?: ReactNode }): ReactElement {
  return (
    <div className="empty">
      <p>{title}</p>
      {action}
    </div>
  );
}
// PAY-102: dashboard empty state
