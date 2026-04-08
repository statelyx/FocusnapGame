"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Copy, DoorOpen, Play, Trophy, Users } from "lucide-react";
import { useAppContext } from "@/components/app-providers";
import { ModeSelector } from "@/components/mode-selector";
import { ObjectList } from "@/components/object-list";
import { ProgressBar } from "@/components/progress-bar";
import { SceneBoard } from "@/components/scene-board";
import { Timer } from "@/components/timer";
import { scenes, type GameMode } from "@/data/game-data";

type RoomPlayer = {
  id: string;
  nickname: string;
  score: number;
  lives: number;
  foundIds: string[];
};

type RoomState = {
  pin: string;
  hostId: string;
  status: "lobby" | "playing" | "finished";
  mode: GameMode;
  sceneId: string;
  targetIds: string[];
  startAt: number | null;
  duration: number;
  players: RoomPlayer[];
};

async function postJson(url: string, body: object) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("request-failed");
  }

  return response.json();
}

export function GroupPlayShell() {
  const { nickname, t, locale } = useAppContext();
  const [mode, setMode] = useState<GameMode>("quick");
  const [pinInput, setPinInput] = useState("");
  const [room, setRoom] = useState<RoomState | null>(null);
  const [playerId, setPlayerId] = useState("");
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const [origin, setOrigin] = useState("");

  const scene = useMemo(
    () => scenes.find((entry) => entry.id === room?.sceneId) ?? scenes[0],
    [room?.sceneId],
  );

  const targets = useMemo(
    () => scene.objects.filter((object) => room?.targetIds.includes(object.id)),
    [room?.targetIds, scene.objects],
  );

  const me = room?.players.find((player) => player.id === playerId);
  const timeLeft =
    room?.status === "playing" && room.startAt
      ? Math.max(room.duration - Math.floor((Date.now() - room.startAt) / 1000), 0)
      : room?.duration ?? 0;

  useEffect(() => {
    setOrigin(window.location.origin);
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("room");
    if (fromUrl) {
      setPinInput(fromUrl.toUpperCase());
    }
  }, []);

  useEffect(() => {
    if (!room?.pin) {
      return;
    }

    const interval = window.setInterval(async () => {
      const response = await fetch(`/api/group-rooms/${room.pin}`);
      if (!response.ok) {
        return;
      }

      const data = await response.json();
      setRoom(data.room);
    }, 1200);

    return () => window.clearInterval(interval);
  }, [room?.pin]);

  const sortedPlayers = [...(room?.players ?? [])].sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return b.foundIds.length - a.foundIds.length;
  });

  return (
    <section id="group" className="space-y-8 py-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.32em] text-accent">{t.groupTitle}</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{t.groupSubtitle}</h2>
        <p className="max-w-3xl text-sm leading-7 text-muted">{t.groupNote}</p>
      </div>

      {!room ? (
        <div className="grid gap-6 xl:grid-cols-[0.34fr_0.66fr]">
          <div className="space-y-5">
            <ModeSelector mode={mode} onChange={setMode} />
            <div className="glass-panel rounded-[1.75rem] p-5">
              <p className="text-sm text-muted">{t.createRoom}</p>
              <button
                type="button"
                disabled={!nickname}
                onClick={async () => {
                  const data = await postJson("/api/group-rooms", { action: "create", nickname });
                  setRoom(data.room);
                  setPlayerId(data.playerId);
                }}
                className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-accent font-medium text-slate-950 transition hover:scale-[1.01] disabled:opacity-50"
              >
                <Users size={18} />
                {t.createAction}
              </button>
            </div>
            <div className="glass-panel rounded-[1.75rem] p-5">
              <p className="text-sm text-muted">{t.joinRoom}</p>
              <input
                value={pinInput}
                onChange={(event) => setPinInput(event.target.value.toUpperCase())}
                placeholder={t.enterPin}
                className="mt-4 h-13 w-full rounded-2xl border border-border bg-surface-soft px-4 outline-none focus:border-accent/35"
              />
              <button
                type="button"
                disabled={!nickname || pinInput.trim().length < 4}
                onClick={async () => {
                  const data = await postJson("/api/group-rooms", {
                    action: "join",
                    nickname,
                    pin: pinInput.trim(),
                  });
                  setRoom(data.room);
                  setPlayerId(data.playerId);
                }}
                className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-2xl border border-border bg-surface-soft font-medium transition hover:border-accent/35 hover:bg-accent/8 disabled:opacity-50"
              >
                <DoorOpen size={18} />
                {t.joinAction}
              </button>
            </div>
          </div>

          <div className="glass-panel rounded-[1.9rem] p-6">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { title: t.roomPin, value: "6-digit shared PIN" },
                { title: t.startRace, value: "Host starts same round" },
                { title: t.leaderboard, value: "Live ranking by score" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-surface-soft p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted">{item.title}</p>
                  <p className="mt-2 text-sm text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[0.3fr_0.7fr]">
          <aside className="space-y-5">
            <div className="glass-panel rounded-[1.75rem] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted">{t.waitingRoom}</p>
                  <h3 className="mt-1 font-display text-3xl font-semibold">{room.pin}</h3>
                </div>
                <button
                  type="button"
                  onClick={async () => {
                    await navigator.clipboard.writeText(`${origin}?room=${room.pin}`);
                  }}
                  className="flex h-11 items-center gap-2 rounded-2xl border border-border bg-surface-soft px-3 text-sm transition hover:border-accent/35"
                >
                  <Copy size={16} />
                  {t.copyLink}
                </button>
              </div>
              <p className="mt-4 text-sm text-muted">{t.shareLink}</p>
              <p className="mt-2 rounded-2xl border border-border bg-surface-soft px-4 py-3 text-sm text-foreground">
                {origin ? `${origin}?room=${room.pin}` : room.pin}
              </p>

              {room.hostId === playerId && room.status === "lobby" ? (
                <button
                  type="button"
                  onClick={async () => {
                    const data = await postJson("/api/group-rooms", {
                      action: "start",
                      pin: room.pin,
                      playerId,
                      mode,
                    });
                    setRoom(data.room);
                  }}
                  className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-accent font-medium text-slate-950 transition hover:scale-[1.01]"
                >
                  <Play size={18} />
                  {t.startRace}
                </button>
              ) : null}
            </div>

            <div className="glass-panel rounded-[1.75rem] p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted">{t.players}</p>
                <p className="text-sm text-muted">{sortedPlayers.length}</p>
              </div>
              <div className="mt-4 space-y-3">
                {sortedPlayers.map((player, index) => (
                  <div key={player.id} className="rounded-2xl border border-border bg-surface-soft px-4 py-3">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-medium text-foreground">
                          {index + 1}. {player.nickname} {player.id === room.hostId ? `(${t.host})` : ""}
                        </p>
                        <p className="mt-1 text-xs text-muted">
                          {player.foundIds.length}/{room.targetIds.length} found · {player.lives}/3 {t.livesLabel.toLocaleLowerCase(locale)}
                        </p>
                      </div>
                      <p className="font-display text-xl font-semibold">{player.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="glass-panel rounded-[1.75rem] p-5">
                <p className="text-sm text-muted">{t.raceLive}</p>
                <p className="mt-2 font-display text-3xl font-semibold">{room.status}</p>
              </div>
              <div className="glass-panel rounded-[1.75rem] p-5">
                <p className="text-sm text-muted">{t.scoreLabel}</p>
                <p className="mt-2 font-display text-3xl font-semibold">{me?.score ?? 0}</p>
              </div>
              <div className="glass-panel rounded-[1.75rem] p-5">
                <Timer timeLeft={timeLeft} />
              </div>
            </div>

            {room.status === "playing" || room.status === "finished" ? (
              <>
                <SceneBoard
                  scene={scene}
                  targets={targets}
                  found={me?.foundIds ?? []}
                  highlighted={highlighted}
                  onObjectClick={async (id) => {
                    const isTarget = room.targetIds.includes(id);
                    setHighlighted(isTarget ? id : null);
                    await postJson("/api/group-rooms", {
                      action: "guess",
                      pin: room.pin,
                      playerId,
                      objectId: id,
                    });
                    const response = await fetch(`/api/group-rooms/${room.pin}`);
                    const data = await response.json();
                    setRoom(data.room);
                    if (isTarget) {
                      window.setTimeout(() => setHighlighted(null), 1200);
                    }
                  }}
                  onMiss={async () => {
                    await postJson("/api/group-rooms", {
                      action: "guess",
                      pin: room.pin,
                      playerId,
                      objectId: "__miss__",
                    });
                    const response = await fetch(`/api/group-rooms/${room.pin}`);
                    const data = await response.json();
                    setRoom(data.room);
                  }}
                />
                <div className="grid gap-4 xl:grid-cols-[0.42fr_0.58fr]">
                  <ObjectList
                    activeObjects={targets}
                    found={me?.foundIds ?? []}
                    highlighted={highlighted}
                  />
                  <div className="glass-panel rounded-[1.75rem] p-5">
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Trophy size={16} />
                      {t.leaderboard}
                    </div>
                    <div className="mt-4 space-y-3">
                      {sortedPlayers.map((player, index) => (
                        <div key={player.id} className="rounded-2xl border border-border bg-surface-soft px-4 py-3">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-foreground">
                              {index + 1}. {player.nickname}
                            </p>
                            <p className="font-display text-xl font-semibold">{player.score}</p>
                          </div>
                          <div className="mt-2">
                            <ProgressBar
                              progress={
                                room.targetIds.length
                                  ? (player.foundIds.length / room.targetIds.length) * 100
                                  : 0
                              }
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel rounded-[1.9rem] p-6"
              >
                <p className="text-sm text-muted">{t.lobbyReady}</p>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
