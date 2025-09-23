// app/api/trip-requests/[id]/route.ts
export const runtime = "edge"; // only if your DB client is edge-safe (neon-http + drizzle)

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/client";
import { tripRequests } from "@/db/schema";
import { eq } from "drizzle-orm";

type Params = { id: string };

// GET /api/trip-requests/:id
export async function GET(_req: NextRequest, ctx: { params: Promise<Params> }) {
  const { id } = await ctx.params;

  const [row] = await db
    .select()
    .from(tripRequests)
    .where(eq(tripRequests.id, id))
    .limit(1);

  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(row, { status: 200 });
}

// PUT /api/trip-requests/:id
export async function PUT(req: NextRequest, ctx: { params: Promise<Params> }) {
  const { id } = await ctx.params;
  const body = await req.json();

  const [updated] = await db
    .update(tripRequests)
    .set({
      // be explicit if you want stricter control:
      origin: body.origin,
      destination: body.destination,
      nationality: body.nationality,
      startDate: body.startDate,
      endDate: body.endDate,
      adults: body.adults,
      kids: body.kids ?? 0,
      airlinePreference: body.airlinePreference,
      hotelPreference: body.hotelPreference,
      flightClass: body.flightClass,
      visaStatus: body.visaStatus,
      passengerName: body.passengerName,
      email: body.email,
      phoneCountryCode: body.phoneCountryCode,
      phoneNumber: body.phoneNumber,
      // ...plus any status fields you actually have in the schema
      // updatedAt will auto-update if you set a DB default/trigger
    } as any)
    .where(eq(tripRequests.id, id))
    .returning();

  if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(updated, { status: 200 });
}

// DELETE /api/trip-requests/:id
export async function DELETE(_req: NextRequest, ctx: { params: Promise<Params> }) {
  const { id } = await ctx.params;

  const [deleted] = await db
    .delete(tripRequests)
    .where(eq(tripRequests.id, id))
    .returning();

  if (!deleted) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true, id }, { status: 200 });
}
