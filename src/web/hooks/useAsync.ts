import { useEffect, useState } from "react";

export type AsyncState<T> =
  | { status: "loading" }
  | { status: "ready"; value: T }
  | { status: "error"; error: string };

export function useAsync<T>(load: () => Promise<T>, deps: readonly unknown[]): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({ status: "loading" });
  useEffect(() => {
    let live = true;
    setState({ status: "loading" });
    load().then(
      (value) => {
        if (live) setState({ status: "ready", value });
      },
      (err: unknown) => {
        if (live) setState({ status: "error", error: err instanceof Error ? err.message : String(err) });
      },
    );
    return () => {
      live = false;
    };
    // The caller owns the dependency list.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return state;
}
