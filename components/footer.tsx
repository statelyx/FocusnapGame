"use client";

import { useAppContext } from "@/components/app-providers";

export function Footer() {
  const { t } = useAppContext();

  return (
    <footer className="border-t border-border/80 py-8 text-sm text-muted">
      <p>{t.footer}</p>
    </footer>
  );
}
