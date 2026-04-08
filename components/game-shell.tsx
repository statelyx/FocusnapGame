"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, RefreshCcw, RotateCcw, Sparkles, Trophy } from "lucide-react";
import { useAppContext } from "@/components/app-providers";
import { HintButton } from "@/components/hint-button";
import { ModeSelector } from "@/components/mode-selector";
import { ObjectList } from "@/components/object-list";
import { ProgressBar } from "@/components/progress-bar";
import { SceneBoard } from "@/components/scene-board";
import { Timer } from "@/components/timer";
import { cn } from "@/lib/utils";

type GameHook = ReturnType<typeof import("@/hooks/use-focus-game").useFocusGame>;

export function GameShell({ game }: { game: GameHook }) {
  const { t } = useAppContext();

  return (
    <section
      id="session"
      ref={game.gameRef as React.RefObject<HTMLElement>}
      className="space-y-8 py-10"
    >
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.32em] text-amber">{t.sessionTitle}</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{t.sessionSubtitle}</h2>
        <p className="max-w-3xl text-sm leading-7 text-muted">
          <span className="font-medium text-foreground">{t.scenePoolTitle}. </span>
          {t.scenePoolBody}
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.28fr_0.72fr]">
        <aside className="space-y-5">
          <ModeSelector mode={game.mode} onChange={game.setMode} />

          <div className="glass-panel rounded-[1.75rem] p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-muted">{t.progressLabel}</p>
                <p className="mt-1 font-display text-3xl font-semibold">
                  {game.found.length}/{game.targets.length}
                </p>
              </div>
              <Timer timeLeft={game.timeLeft} />
            </div>
            <div className="mt-5">
              <ProgressBar progress={game.progress} />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface-soft px-4 py-3">
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Heart size={15} />
                  {t.livesLabel}
                </div>
                <p className="mt-2 font-display text-2xl font-semibold">{game.lives}/3</p>
                <p className="text-xs text-muted">{game.lives} {t.wrongLeft}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface-soft px-4 py-3">
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Trophy size={15} />
                  {t.scoreLabel}
                </div>
                <p className="mt-2 font-display text-2xl font-semibold">{game.score}</p>
                <p className="text-xs text-muted">+120 / -35 / hint -30</p>
              </div>
            </div>
          </div>

          <ObjectList
            activeObjects={game.targets}
            found={game.found}
            highlighted={game.highlighted}
          />

          <div className="grid gap-3">
            <HintButton hintsLeft={game.hintsLeft} onClick={game.useHint} />
            <button
              type="button"
              onClick={game.restart}
              className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-border bg-surface-soft px-4 font-medium transition hover:border-accent/35 hover:bg-accent/8"
            >
              <RotateCcw size={18} />
              {t.restart}
            </button>
            <button
              type="button"
              onClick={game.reshuffleScene}
              className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-border bg-surface-soft px-4 font-medium transition hover:border-accent/35 hover:bg-accent/8"
            >
              <RefreshCcw size={18} />
              {t.reshuffle}
            </button>
          </div>
        </aside>

        <div className="space-y-4">
          <SceneBoard
            scene={game.scene}
            targets={game.targets}
            found={game.found}
            highlighted={game.highlighted}
            onObjectClick={game.markFound}
            onMiss={game.markMiss}
          />

          <AnimatePresence mode="wait">
            {game.toast ? (
              <motion.div
                key={game.toast.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className={cn(
                  "flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm",
                  game.toast.type === "success"
                    ? "border-success/20 bg-success/10 text-success"
                    : "border-error/20 bg-error/10 text-error",
                )}
              >
                <Sparkles size={16} />
                {game.toast.message === "found"
                  ? t.objectFound
                  : game.toast.message === "time-up"
                    ? t.timeUp
                    : t.miss}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
