import type { ButtonHTMLAttributes, ReactElement } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

export function Button({ variant = "primary", type = "button", ...rest }: ButtonProps): ReactElement {
  return <button type={type} data-variant={variant} className={`btn btn-${variant}`} {...rest} />;
}
