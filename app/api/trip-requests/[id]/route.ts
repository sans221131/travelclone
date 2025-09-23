// app/api/trip-requests/[id]/route.ts
export const runtime = "edge";

import { NextResponse } from "next/server";
import { db } from "@/db/client";
import { tripRequests } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const [row] = await db.select().from(tripRequests).where(eq(tripRequests.id, params.id)).limit(1);
  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(row);
}
