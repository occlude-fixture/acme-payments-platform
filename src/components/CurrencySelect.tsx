import type { ReactElement } from "react";

export interface CurrencySelectProps {
  value: string;
  options: readonly string[];
  onChange: (code: string) => void;
}

export function CurrencySelect({ value, options, onChange }: CurrencySelectProps): ReactElement {
  return (
    <label className="field">
      Currency
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
    </label>
  );
}
