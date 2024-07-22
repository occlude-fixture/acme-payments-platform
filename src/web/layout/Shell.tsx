import type { ReactElement, ReactNode } from "react";
import type { RouteId } from "@/web/router";
import { Nav } from "./Nav";

export function Shell({ active, children }: { active: RouteId; children: ReactNode }): ReactElement {
  return (
    <div className="shell">
      <Nav active={active} />
      <main>{children}</main>
    </div>
  );
}
