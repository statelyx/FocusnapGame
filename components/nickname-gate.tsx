"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "@/components/app-providers";

export function NicknameGate() {
  const { nickname, setNickname, t } = useAppContext();
  const [draft, setDraft] = useState(nickname);
  const [open, setOpen] = useState(!nickname);

  useEffect(() => {
    setOpen(!nickname);
  }, [nickname]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.96 }}
            className="glass-panel w-full max-w-md rounded-[2rem] p-6"
          >
            <h2 className="font-display text-3xl font-semibold tracking-tight">{t.nicknameTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{t.nicknameBody}</p>
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder={t.nicknamePlaceholder}
              className="mt-5 h-13 w-full rounded-2xl border border-border bg-surface-soft px-4 text-foreground outline-none focus:border-accent/35"
            />
            <button
              type="button"
              onClick={() => {
                const value = draft.trim();
                if (!value) {
                  return;
                }
                setNickname(value);
                setOpen(false);
              }}
              className="mt-5 flex h-13 w-full items-center justify-center rounded-2xl bg-accent font-medium text-slate-950 transition hover:scale-[1.01]"
            >
              {t.continueAction}
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
