"use client";

import { motion } from "framer-motion";

export function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="h-3 overflow-hidden rounded-full bg-white/8">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="h-full rounded-full bg-[linear-gradient(90deg,_var(--accent),_var(--teal),_var(--amber))]"
      />
    </div>
  );
}
