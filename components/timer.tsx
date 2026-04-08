"use client";

import { motion } from "framer-motion";
import { Timer as TimerIcon } from "lucide-react";
import { useAppContext } from "@/components/app-providers";
import { formatTime } from "@/lib/utils";

export function Timer({ timeLeft }: { timeLeft: number }) {
  const { t } = useAppContext();
  const urgency = timeLeft <= 20;

  return (
    <motion.div
      animate={urgency ? { scale: [1, 1.04, 1] } : { scale: 1 }}
      transition={urgency ? { repeat: Infinity, duration: 1.2 } : undefined}
      className={`rounded-2xl border px-4 py-3 ${urgency ? "border-error/20 bg-error/10 text-error" : "border-border bg-surface-soft text-foreground"}`}
    >
      <div className="flex items-center gap-2 text-sm">
        <TimerIcon size={16} />
        <span>{formatTime(timeLeft)}</span>
      </div>
      <p className="mt-1 text-xs text-muted">{t.secondsLeft}</p>
    </motion.div>
  );
}
