import type { ComponentType } from "react";
import { Customers } from "./pages/Customers";
import { Dashboard } from "./pages/Dashboard";
import { Invoices } from "./pages/Invoices";
import { Settings } from "./pages/Settings";

export type RouteId = "dashboard" | "invoices" | "customers" | "settings";

export interface Route {
  id: RouteId;
  path: string;
  label: string;
  component: ComponentType;
}

export const ROUTES: readonly Route[] = [
  { id: "dashboard", path: "/", label: "Dashboard", component: Dashboard },
  { id: "invoices", path: "/invoices", label: "Invoices", component: Invoices },
  { id: "customers", path: "/customers", label: "Customers", component: Customers },
  { id: "settings", path: "/settings", label: "Settings", component: Settings },
];

export function resolveRoute(hash: string): Route {
  const path = hash.replace(/^#/, "") || "/";
  return ROUTES.find((route) => route.path === path) ?? ROUTES[0];
}
