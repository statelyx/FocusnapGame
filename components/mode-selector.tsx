"use client";

import { motion } from "framer-motion";
import { modeConfig, type GameMode } from "@/data/game-data";
import { useAppContext } from "@/components/app-providers";
import { cn } from "@/lib/utils";

export function ModeSelector({
  mode,
  onChange,
}: {
  mode: GameMode;
  onChange: (mode: GameMode) => void;
}) {
  const { t } = useAppContext();

  return (
    <div className="glass-panel rounded-[1.75rem] p-3">
      <div className="grid gap-3 md:grid-cols-2">
        {(["quick", "deep"] as GameMode[]).map((item) => {
          const isActive = item === mode;
          return (
            <button
              key={item}
              type="button"
              onClick={() => onChange(item)}
              className={cn(
                "relative overflow-hidden rounded-[1.5rem] border px-5 py-5 text-left transition",
                isActive
                  ? "border-accent/30 bg-accent/12"
                  : "border-border bg-surface-soft hover:border-accent/20 hover:bg-accent/5",
              )}
            >
              {isActive ? (
                <motion.div
                  layoutId="mode-highlight"
                  className="absolute inset-0 rounded-[1.5rem] border border-accent/35"
                />
              ) : null}
              <p className="font-display text-xl font-semibold">{t.modes[item].title}</p>
              <p className="mt-2 text-sm leading-7 text-muted">{t.modes[item].description}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-accent">{t.modes[item].timing}</span>
                <span className="text-muted">
                  {modeConfig[item].objectCount} {t.objectsTitle.toLocaleLowerCase()}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
