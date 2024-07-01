import type { ReactElement, ReactNode } from "react";

export interface TableProps {
  columns: string[];
  rows: ReactNode[][];
}

export function Table({ columns, rows }: TableProps): ReactElement {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} scope="col">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((cells, i) => (
          <tr key={i}>
            {cells.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
