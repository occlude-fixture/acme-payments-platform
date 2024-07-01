import type { ReactElement } from "react";

export function Spinner({ label }: { label: string }): ReactElement {
  return (
    <div role="status" className="spinner">
      {label}…
    </div>
  );
}
