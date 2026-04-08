"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { featuredScenes, modeConfig, type GameMode, type SceneDefinition } from "@/data/game-data";
import { detectIntent } from "@/lib/intent";

type Toast = { type: "success" | "error"; message: string; id: number } | null;

function pickNextScene(currentSceneId?: string) {
  const pool = currentSceneId
    ? featuredScenes.filter((scene) => scene.id !== currentSceneId)
    : featuredScenes;
  return pool[Math.floor(Math.random() * pool.length)] ?? featuredScenes[0];
}

function pickTargets(scene: SceneDefinition, mode: GameMode) {
  const shuffled = [...scene.objects].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, modeConfig[mode].objectCount);
}

export function useFocusGame() {
  const [mode, setMode] = useState<GameMode>("quick");
  const [scene, setScene] = useState<SceneDefinition>(() => featuredScenes[0]);
  const [targets, setTargets] = useState(() => pickTargets(featuredScenes[0], "quick"));
  const [found, setFound] = useState<string[]>([]);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(modeConfig.quick.duration);
  const [hintsLeft, setHintsLeft] = useState(modeConfig.quick.hints);
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const [toast, setToast] = useState<Toast>(null);
  const [isComplete, setIsComplete] = useState(false);
  const gameRef = useRef<HTMLElement | null>(null);

  const missingObjects = useMemo(
    () => targets.filter((item) => !found.includes(item.id)),
    [targets, found],
  );

  const progress = targets.length ? (found.length / targets.length) * 100 : 0;

  const configureRound = useCallback(
    (nextMode: GameMode, nextScene: SceneDefinition) => {
      setTargets(pickTargets(nextScene, nextMode));
      setFound([]);
      setLives(3);
      setScore(0);
      setTimeLeft(modeConfig[nextMode].duration);
      setHintsLeft(modeConfig[nextMode].hints);
      setHighlighted(null);
      setIsComplete(false);
      setToast(null);
    },
    [],
  );

  const restart = useCallback(() => {
    configureRound(mode, scene);
  }, [configureRound, mode, scene]);

  const reshuffleScene = useCallback(() => {
    const nextScene = pickNextScene(scene.id);
    setScene(nextScene);
  }, [scene.id]);

  useEffect(() => {
    configureRound(mode, scene);
  }, [mode, scene, configureRound]);

  useEffect(() => {
    if (isComplete || timeLeft <= 0 || lives <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setTimeLeft((current) => Math.max(current - 1, 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isComplete, lives, timeLeft]);

  useEffect(() => {
    if (timeLeft !== 0 && lives !== 0) {
      return;
    }

    setToast({ type: "error", message: "time-up", id: Date.now() });
  }, [lives, timeLeft]);

  useEffect(() => {
    if (isComplete || found.length !== targets.length || targets.length === 0) {
      return;
    }

    setScore((current) => current + timeLeft * 2 + lives * 50);
    setIsComplete(true);
  }, [found.length, isComplete, lives, targets.length, timeLeft]);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timeout = window.setTimeout(() => setToast(null), 1800);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const useHint = useCallback(() => {
    if (hintsLeft <= 0 || missingObjects.length === 0 || timeLeft === 0 || lives === 0) {
      return;
    }

    const target = missingObjects[0].id;
    setHintsLeft((current) => current - 1);
    setScore((current) => Math.max(current - 30, 0));
    setHighlighted(target);
    window.setTimeout(() => setHighlighted(null), 1800);
  }, [hintsLeft, lives, missingObjects, timeLeft]);

  const scrollToGame = useCallback(() => {
    gameRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const onKeydown = (event: KeyboardEvent) => {
      if (event.key !== "/") {
        return;
      }

      const result = window.prompt("Command");
      if (!result) {
        return;
      }

      const intent = detectIntent(result);

      if (intent === "start") {
        restart();
        scrollToGame();
      }

      if (intent === "hint") {
        useHint();
      }

      if (intent === "restart") {
        reshuffleScene();
      }
    };

    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, [restart, reshuffleScene, scrollToGame, useHint]);

  const markFound = useCallback(
    (id: string) => {
      if (timeLeft === 0 || lives === 0 || found.includes(id)) {
        return;
      }

      if (!targets.some((item) => item.id === id)) {
        setLives((current) => Math.max(current - 1, 0));
        setScore((current) => Math.max(current - 35, 0));
        setToast({ type: "error", message: "miss", id: Date.now() });
        return;
      }

      setFound((current) => [...current, id]);
      setScore((current) => current + 120);
      setHighlighted(id);
      setToast({ type: "success", message: "found", id: Date.now() });
      window.setTimeout(() => setHighlighted(null), 1200);
    },
    [found, lives, targets, timeLeft],
  );

  const markMiss = useCallback(() => {
    if (timeLeft === 0 || lives === 0) {
      return;
    }

    setLives((current) => Math.max(current - 1, 0));
    setScore((current) => Math.max(current - 20, 0));
    setToast({ type: "error", message: "miss", id: Date.now() });
  }, [lives, timeLeft]);

  const result = {
    foundCount: found.length,
    totalCount: targets.length,
    duration: modeConfig[mode].duration - timeLeft,
    mode,
    score,
  };

  return {
    mode,
    setMode,
    scene,
    targets,
    found,
    lives,
    score,
    timeLeft,
    hintsLeft,
    highlighted,
    progress,
    markFound,
    markMiss,
    useHint,
    restart,
    reshuffleScene,
    isComplete,
    dismissCompletion: () => setIsComplete(false),
    scrollToGame,
    gameRef,
    toast,
    result,
  };
}
