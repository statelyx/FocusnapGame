"use client";

import { motion } from "framer-motion";
import { ScanSearch, TimerReset, Zap } from "lucide-react";
import { useAppContext } from "@/components/app-providers";

const stepIcons = [Zap, ScanSearch, TimerReset];

export function FeatureSection() {
  const { t } = useAppContext();

  return (
    <div className="space-y-8 py-4 md:py-8">
      <section id="how" className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.32em] text-accent">{t.howTitle}</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{t.howSubtitle}</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {t.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-panel rounded-[1.75rem] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="benefits" className="space-y-6 py-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.32em] text-teal">{t.benefitsTitle}</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{t.benefitsSubtitle}</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {t.benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-border bg-surface-soft p-6"
            >
              <div className="mb-5 h-px w-14 bg-gradient-to-r from-accent to-transparent" />
              <h3 className="font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
