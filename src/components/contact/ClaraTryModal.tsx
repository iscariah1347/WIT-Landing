"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { Phone, X } from "lucide-react";

import { Button } from "@/components/ui/Button";

const CLARA_PHONE_DISPLAY = "842 91 61 49";

type ClaraTryModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ClaraTryModal({ open, onClose }: ClaraTryModalProps) {
  const titleId = useId();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto px-[var(--gutter)] py-8"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-deep/80 backdrop-blur-sm"
        aria-label="Cerrar"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="demo-panel relative z-10 w-full max-w-md p-5 text-center md:p-7"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-md p-1.5 text-muted transition-micro hover:bg-surface hover:text-ivory"
          aria-label="Cerrar"
        >
          <X className="size-5" aria-hidden />
        </button>

        <p className="text-eyebrow text-gold">WIT Conecta</p>
        <h2
          id={titleId}
          className="mt-3 font-display text-2xl font-semibold text-ivory md:text-[1.75rem]"
        >
          Habla conmigo
        </h2>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted">
          Soy Clara. Llámame cuando quieras, cuéntame lo que necesites y estaré
          encantada de ayudarte.
        </p>

        <p className="mt-7 inline-flex items-center justify-center gap-2 text-lg font-semibold tracking-wide text-gold">
          <Phone className="size-5" aria-hidden />
          {CLARA_PHONE_DISPLAY}
        </p>

        <div className="mt-8 flex justify-center">
          <Button type="button" variant="primary" onClick={onClose}>
            Entendido
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
