"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { useAppContext } from "@/components/app-providers";

export function Hero({ onStart }: { onStart: () => void }) {
  const { t } = useAppContext();

  return (
    <section className="grid min-h-[72vh] items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm text-accent"
        >
          <Sparkles size={16} />
          {t.heroSubtitle}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="space-y-5"
        >
          <h1 className="max-w-3xl font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {t.heroTitle}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">{t.heroDescription}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <button
            type="button"
            onClick={onStart}
            className="group flex h-14 items-center justify-center gap-2 rounded-2xl bg-accent px-6 font-medium text-slate-950 transition hover:scale-[1.02] hover:bg-[#76b8ff] active:scale-[0.99]"
          >
            {t.startSession}
            <ArrowDownRight size={18} className="transition group-hover:translate-x-1 group-hover:translate-y-1" />
          </button>
          <div className="rounded-2xl border border-border bg-surface-soft px-5 py-4 text-sm text-muted">
            {t.heroBadge}
          </div>
        </motion.div>

        <p className="max-w-2xl text-sm leading-7 text-muted">{t.heroFootnote}</p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="noise glass-panel relative overflow-hidden rounded-[2rem] p-6"
      >
        <div className="absolute inset-x-6 top-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm text-muted">
          <span>Workstation Scan</span>
          <span>01:15</span>
        </div>
        <div className="mt-16 rounded-[1.75rem] border border-border bg-[linear-gradient(180deg,_rgba(255,255,255,0.06),_rgba(255,255,255,0.02))] p-5">
          <div className="grid gap-4">
            <div className="h-44 rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,_rgba(84,164,255,0.24),_transparent_25%),linear-gradient(145deg,_#172335,_#0e1725)] p-5">
              <div className="flex h-full items-end justify-between">
                <div className="h-20 w-24 rounded-3xl border border-white/10 bg-white/5" />
                <div className="h-16 w-16 rounded-full border border-amber/30 bg-amber/10" />
                <div className="h-28 w-20 rounded-[2rem] border border-teal/30 bg-teal/10" />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Scan", "Recover", "Return"].map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-surface-soft px-4 py-4 text-sm text-muted">
                  <p className="font-medium text-foreground">{item}</p>
                  <p className="mt-2">Precision visual search to cut through passive fatigue.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
