import { NextResponse } from "next/server";
import {
  createRoom,
  joinRoom,
  startRoom,
  submitGuess,
  useRoomHint,
} from "@/lib/group-room-store";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body = await request.json();
  const action = body.action as string | undefined;

  if (action === "create") {
    if (!body.nickname) {
      return NextResponse.json({ error: "nickname-required" }, { status: 400 });
    }

    return NextResponse.json(createRoom(body.nickname));
  }

  if (action === "join") {
    if (!body.pin || !body.nickname) {
      return NextResponse.json({ error: "pin-and-nickname-required" }, { status: 400 });
    }

    const result = joinRoom(body.pin.toUpperCase(), body.nickname);
    if (!result) {
      return NextResponse.json({ error: "room-not-found" }, { status: 404 });
    }

    return NextResponse.json(result);
  }

  if (action === "start") {
    const room = startRoom(body.pin?.toUpperCase(), body.playerId, body.mode);
    if (!room) {
      return NextResponse.json({ error: "cannot-start-room" }, { status: 400 });
    }

    return NextResponse.json({ room });
  }

  if (action === "guess") {
    const room = submitGuess(body.pin?.toUpperCase(), body.playerId, body.objectId);
    if (!room) {
      return NextResponse.json({ error: "room-not-found" }, { status: 404 });
    }

    return NextResponse.json({ room });
  }

  if (action === "hint") {
    const room = useRoomHint(body.pin?.toUpperCase(), body.playerId);
    if (!room) {
      return NextResponse.json({ error: "room-not-found" }, { status: 404 });
    }

    return NextResponse.json({ room });
  }

  return NextResponse.json({ error: "invalid-action" }, { status: 400 });
}
