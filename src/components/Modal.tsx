import type { ReactElement, ReactNode } from "react";
import { Button } from "./Button";

export interface ModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ title, open, onClose, children }: ModalProps): ReactElement | null {
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label={title} className="modal">
      <header>
        <h2>{title}</h2>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </header>
      {children}
    </div>
  );
}
