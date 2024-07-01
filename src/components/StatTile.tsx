import type { ReactElement, ReactNode } from "react";

export interface StatTileProps {
  label: string;
  emphasis?: boolean;
  children: ReactNode;
}

export function StatTile({ label, emphasis = false, children }: StatTileProps): ReactElement {
  return (
    <div className={emphasis ? "tile tile-emphasis" : "tile"}>
      <span className="tile-label">{label}</span>
      <strong className="tile-value">{children}</strong>
    </div>
  );
}
