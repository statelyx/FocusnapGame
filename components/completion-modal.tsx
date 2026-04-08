"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { useAppContext } from "@/components/app-providers";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onRestart: () => void;
  result: {
    foundCount: number;
    totalCount: number;
    duration: number;
    mode: string;
    score: number;
  };
};

export function CompletionModal({ isOpen, onClose, onRestart, result }: Props) {
  const { t } = useAppContext();

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.96 }}
            className="glass-panel w-full max-w-lg rounded-[2rem] p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-success/12 text-success">
                <CheckCircle2 size={28} />
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-surface-soft text-muted transition hover:text-foreground"
              >
                <X size={16} />
              </button>
            </div>

            <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight">
              {t.completionTitle}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">{t.completionBody}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-border bg-surface-soft p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Mode</p>
                <p className="mt-2 font-display text-lg">{t.modes[result.mode as "quick" | "deep"].title}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface-soft p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Found</p>
                <p className="mt-2 font-display text-lg">
                  {result.foundCount}/{result.totalCount}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface-soft p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Time</p>
                <p className="mt-2 font-display text-lg">{result.duration}s</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface-soft p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Score</p>
                <p className="mt-2 font-display text-lg">{result.score}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={onRestart}
              className="mt-6 flex h-14 w-full items-center justify-center rounded-2xl bg-accent font-medium text-slate-950 transition hover:scale-[1.01]"
            >
              {t.completionAction}
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
