"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { SceneDefinition, SceneObject } from "@/data/game-data";
import { useAppContext } from "@/components/app-providers";
import { cn } from "@/lib/utils";

type Props = {
  scene: SceneDefinition;
  targets: SceneObject[];
  found: string[];
  highlighted: string | null;
  onObjectClick: (id: string) => void;
  onMiss: () => void;
};

export function SceneBoard({
  scene,
  targets,
  found,
  highlighted,
  onObjectClick,
  onMiss,
}: Props) {
  const { t, locale } = useAppContext();

  return (
    <div className="glass-panel overflow-hidden rounded-[2rem] p-3 sm:p-4">
      <div className="mb-3 grid gap-3 rounded-[1.3rem] border border-border bg-surface-soft p-4 md:grid-cols-[1fr_auto_auto]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted">{t.currentScene}</p>
          <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
            {scene.title[locale]}
          </h3>
          <p className="mt-2 text-sm text-muted">{scene.description[locale]}</p>
        </div>
        <div className="rounded-2xl border border-border bg-background/35 px-4 py-3">
          <p className="text-xs uppercase tracking-[0.22em] text-muted">{t.ambience}</p>
          <p className="mt-2 text-sm font-medium text-foreground">{scene.ambience[locale]}</p>
        </div>
        <div className="rounded-2xl border border-border bg-background/35 px-4 py-3">
          <p className="text-xs uppercase tracking-[0.22em] text-muted">{t.objectsTitle}</p>
          <p className="mt-2 text-sm font-medium text-foreground">{scene.objects.length} visible cues</p>
        </div>
      </div>

      <div
        role="img"
        aria-label={t.sceneLabel}
        onClick={onMiss}
        className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem] border border-border bg-slate-900"
      >
        <Image
          src={scene.image}
          alt={scene.title[locale]}
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1100px"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,_rgba(4,10,18,0.03),_rgba(4,10,18,0.18))]" />

        {scene.objects.map((item) => {
          const isTarget = targets.some((target) => target.id === item.id);
          const isFound = found.includes(item.id);
          const isHighlighted = highlighted === item.id;

          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onObjectClick(item.id);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                opacity: isFound ? 0.4 : isHighlighted ? 1 : 1,
                boxShadow: isHighlighted
                  ? "0 0 0 4px rgba(84,164,255,0.35), 0 0 28px rgba(84,164,255,0.55)"
                  : isFound
                    ? "0 0 0 2px rgba(80,211,138,0.28)"
                    : "0 0 0 0 rgba(255,255,255,0)",
                backgroundColor: isFound
                  ? "rgba(80,211,138,0.16)"
                  : isHighlighted
                    ? "rgba(84,164,255,0.18)"
                    : "rgba(255,255,255,0)",
              }}
              className={cn(
                "absolute rounded-[0.85rem] border transition",
                isFound
                  ? "border-success/55"
                  : isHighlighted
                    ? "border-accent/70"
                    : isTarget
                      ? "border-transparent hover:border-white/15"
                      : "border-transparent hover:border-error/15",
              )}
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                width: `${item.width}%`,
                height: `${item.height}%`,
              }}
              aria-label={item.label[locale]}
            >
              <span className="sr-only">{item.label[locale]}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
