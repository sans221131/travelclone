// app/api/trip-requests/route.ts
export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/client";
import { tripRequests } from "@/db/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // basic presence check; swap for zod later if you want stricter types
    const required = [
      "origin",
      "destination",
      "nationality",
      "startDate",
      "endDate",
      "adults",
      "airlinePreference",
      "hotelPreference",
      "flightClass",
      "visaStatus",
      "passengerName",
      "email",
      "phoneCountryCode",
      "phoneNumber",
    ] as const;

    for (const key of required) {
      if (!body[key]) {
        return NextResponse.json(
          { error: `Missing required field: ${key}` },
          { status: 400 }
        );
      }
    }

    // Insert; Drizzle pg `date` accepts 'YYYY-MM-DD' strings
    const [created] = await db
      .insert(tripRequests)
      .values({
        origin: body.origin,
        destination: body.destination,
        nationality: body.nationality,
        startDate: body.startDate, // 'YYYY-MM-DD'
        endDate: body.endDate,     // 'YYYY-MM-DD'
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
      })
      .returning();

    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    console.error("POST /api/trip-requests error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(_req: NextRequest) {
  try {
    const rows = await db.select().from(tripRequests);
    return NextResponse.json(rows, { status: 200 });
  } catch (err) {
    console.error("GET /api/trip-requests error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
