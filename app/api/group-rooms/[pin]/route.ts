import { NextResponse } from "next/server";
import { getRoom } from "@/lib/group-room-store";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ pin: string }> },
) {
  const { pin } = await params;
  const room = getRoom(pin.toUpperCase());
  if (!room) {
    return NextResponse.json({ error: "room-not-found" }, { status: 404 });
  }

  return NextResponse.json({ room });
}
