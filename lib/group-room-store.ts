import { featuredScenes, modeConfig, scenes, type GameMode } from "@/data/game-data";

type RoomStatus = "lobby" | "playing" | "finished";

export type RoomPlayer = {
  id: string;
  nickname: string;
  score: number;
  lives: number;
  foundIds: string[];
  missCount: number;
  hintCount: number;
  joinedAt: number;
};

export type RoomState = {
  pin: string;
  hostId: string;
  status: RoomStatus;
  mode: GameMode;
  sceneId: string;
  targetIds: string[];
  createdAt: number;
  startAt: number | null;
  duration: number;
  players: RoomPlayer[];
};

type Store = Map<string, RoomState>;

function getStore(): Store {
  const globalStore = globalThis as typeof globalThis & {
    __focusnapRooms?: Store;
  };

  if (!globalStore.__focusnapRooms) {
    globalStore.__focusnapRooms = new Map();
  }

  return globalStore.__focusnapRooms;
}

function randomId(length: number) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

function getScene(sceneId: string) {
  return scenes.find((scene) => scene.id === sceneId) ?? scenes[0];
}

function pickScene() {
  return featuredScenes[Math.floor(Math.random() * featuredScenes.length)] ?? featuredScenes[0];
}

function pickTargets(sceneId: string, mode: GameMode) {
  const scene = getScene(sceneId);
  return [...scene.objects]
    .sort(() => Math.random() - 0.5)
    .slice(0, modeConfig[mode].objectCount)
    .map((item) => item.id);
}

function syncRoom(room: RoomState) {
  if (room.status !== "playing" || !room.startAt) {
    return room;
  }

  const expired = Date.now() - room.startAt >= room.duration * 1000;
  const everybodyDone = room.players.every(
    (player) => player.lives <= 0 || player.foundIds.length >= room.targetIds.length,
  );

  if (expired || everybodyDone) {
    room.status = "finished";
  }

  return room;
}

function calculateScore(player: RoomPlayer, room: RoomState) {
  let score = player.foundIds.length * 120;
  score -= player.missCount * 35;
  score -= player.hintCount * 30;

  const clearedRoom = player.foundIds.length >= room.targetIds.length && room.targetIds.length > 0;
  if (clearedRoom && room.startAt) {
    score += Math.max(0, room.duration - Math.floor((Date.now() - room.startAt) / 1000)) * 2;
  }

  return Math.max(score, 0);
}

function refreshScores(room: RoomState) {
  room.players = room.players.map((player) => ({
    ...player,
    score: calculateScore(player, room),
  }));

  return room;
}

export function createRoom(nickname: string) {
  const pin = randomId(6);
  const playerId = crypto.randomUUID();
  const scene = pickScene();
  const room: RoomState = {
    pin,
    hostId: playerId,
    status: "lobby",
    mode: "quick",
    sceneId: scene.id,
    targetIds: [],
    createdAt: Date.now(),
    startAt: null,
    duration: modeConfig.quick.duration,
    players: [
      {
        id: playerId,
        nickname,
        score: 0,
        lives: 3,
        foundIds: [],
        missCount: 0,
        hintCount: 0,
        joinedAt: Date.now(),
      },
    ],
  };

  getStore().set(pin, room);
  return { room: refreshScores(syncRoom(room)), playerId };
}

export function joinRoom(pin: string, nickname: string) {
  const room = getStore().get(pin);
  if (!room) {
    return null;
  }

  const playerId = crypto.randomUUID();
  room.players.push({
    id: playerId,
    nickname,
    score: 0,
    lives: 3,
    foundIds: [],
    missCount: 0,
    hintCount: 0,
    joinedAt: Date.now(),
  });

  return { room: refreshScores(syncRoom(room)), playerId };
}

export function getRoom(pin: string) {
  const room = getStore().get(pin);
  if (!room) {
    return null;
  }

  return refreshScores(syncRoom(room));
}

export function startRoom(pin: string, playerId: string, mode: GameMode) {
  const room = getStore().get(pin);
  if (!room || room.hostId !== playerId) {
    return null;
  }

  const scene = pickScene();
  room.mode = mode;
  room.sceneId = scene.id;
  room.targetIds = pickTargets(scene.id, mode);
  room.duration = modeConfig[mode].duration;
  room.startAt = Date.now();
  room.status = "playing";
  room.players = room.players.map((player) => ({
    ...player,
    score: 0,
    lives: 3,
    foundIds: [],
    missCount: 0,
    hintCount: 0,
  }));

  return refreshScores(syncRoom(room));
}

export function submitGuess(pin: string, playerId: string, objectId: string) {
  const room = getStore().get(pin);
  if (!room) {
    return null;
  }

  syncRoom(room);
  if (room.status !== "playing") {
    return room;
  }

  const player = room.players.find((entry) => entry.id === playerId);
  if (!player || player.lives <= 0) {
    return room;
  }

  const isTarget = room.targetIds.includes(objectId);
  const alreadyFound = player.foundIds.includes(objectId);

  if (isTarget && !alreadyFound) {
    player.foundIds.push(objectId);
  } else if (!isTarget) {
    player.lives = Math.max(player.lives - 1, 0);
    player.missCount += 1;
  }

  return refreshScores(syncRoom(room));
}

export function useRoomHint(pin: string, playerId: string) {
  const room = getStore().get(pin);
  if (!room) {
    return null;
  }

  const player = room.players.find((entry) => entry.id === playerId);
  if (!player) {
    return room;
  }

  player.hintCount += 1;
  return refreshScores(syncRoom(room));
}

export function updateRoomSetup(
  pin: string,
  playerId: string,
  payload: { mode?: GameMode; sceneId?: string; refreshTargets?: boolean },
) {
  const room = getStore().get(pin);
  if (!room || room.hostId !== playerId || room.status !== "lobby") {
    return null;
  }

  if (payload.mode) {
    room.mode = payload.mode;
    room.duration = modeConfig[payload.mode].duration;
  }

  if (payload.sceneId && featuredScenes.some((scene) => scene.id === payload.sceneId)) {
    room.sceneId = payload.sceneId;
  }

  if (payload.refreshTargets) {
    room.targetIds = pickTargets(room.sceneId, room.mode);
  }

  return refreshScores(syncRoom(room));
}
