"use client";

import { motion } from "framer-motion";
import type { SceneObject } from "@/data/game-data";
import { useAppContext } from "@/components/app-providers";
import { cn } from "@/lib/utils";

type Props = {
  activeObjects: SceneObject[];
  found: string[];
  highlighted: string | null;
};

export function ObjectList({ activeObjects, found, highlighted }: Props) {
  const { t, locale } = useAppContext();

  return (
    <div className="glass-panel rounded-[1.75rem] p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted">{t.objectsTitle}</p>
          <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
            {activeObjects.length}
          </h3>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {activeObjects.map((object) => {
          const isFound = found.includes(object.id);
          const isHighlighted = highlighted === object.id;

          return (
            <motion.div
              key={object.id}
              animate={{ scale: isHighlighted ? 1.02 : 1 }}
              className={cn(
                "rounded-2xl border px-4 py-3 text-sm transition",
                isFound
                  ? "border-success/20 bg-success/10 text-success"
                  : isHighlighted
                    ? "border-accent/30 bg-accent/10 text-foreground"
                    : "border-border bg-surface-soft text-foreground",
              )}
            >
              {object.label[locale]}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
