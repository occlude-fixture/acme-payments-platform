import type { ReactElement } from "react";
import { useHashRoute } from "./hooks/useHashRoute";
import { Shell } from "./layout/Shell";
import { resolveRoute } from "./router";

export function App(): ReactElement {
  const route = resolveRoute(useHashRoute());
  const Page = route.component;
  return (
    <Shell active={route.id}>
      <Page />
    </Shell>
  );
}
