// Calls the service layer. Only the route name and JSON cross the wire; the
// function type is used for the request and response shapes alone.
export async function rpc<F extends (input: any) => unknown>(
  route: string,
  input: Parameters<F>[0],
): Promise<Awaited<ReturnType<F>>> {
  const res = await fetch(`/api/${route}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(input),
  });
  const payload = (await res.json()) as { ok: boolean; result?: unknown; error?: string };
  if (!payload.ok) throw new Error(payload.error ?? `rpc ${route} failed`);
  return payload.result as Awaited<ReturnType<F>>;
}
