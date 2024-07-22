import type { ReactElement } from "react";
import { ROUTES, type RouteId } from "@/web/router";

export function Nav({ active }: { active: RouteId }): ReactElement {
  return (
    <nav className="nav" aria-label="Main">
      <strong>Acme Payments</strong>
      {ROUTES.map((route) => (
        <a key={route.id} href={`#${route.path}`} aria-current={route.id === active ? "page" : undefined}>
          {route.label}
        </a>
      ))}
    </nav>
  );
}
