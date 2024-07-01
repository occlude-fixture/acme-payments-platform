import type { ReactElement, ReactNode } from "react";

export function Card({ title, children }: { title: string; children: ReactNode }): ReactElement {
  return (
    <section className="card" aria-label={title}>
      <h2 className="card-title">{title}</h2>
      <div className="card-body">{children}</div>
    </section>
  );
}
