// components/trip/TripBuilderLite.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

// Pull the same curated choices you use in TripBuilderReceipt
import {
  AIRLINES,
  DESTINATIONS as DESTINATION_CHOICES,
  NATIONALITIES,
  ORIGIN_CITIES,
  HOTEL_PREFERENCES,
  FLIGHT_CLASSES,
  VISA_STATUS,
  DESTINATIONS, // used for label mapping
} from "@/lib/trip-builder/guardrails";

/* ---------------- Types ---------------- */
type Answers = {
  from?: string;            // "City, Country"
  destination?: string;     // "City, Country"
  startDate?: string;       // ISO yyyy-mm-dd
  endDate?: string;         // ISO yyyy-mm-dd
  adults?: number;
  children?: number;

  passengerName?: string;
  phoneCountryCode?: string; // "+91"
  phoneNumber?: string;
  email?: string;
  nationality?: string;
  airlinePref?: string;
  hotelPref?: string;
  flightClass?: string;
  visaStatus?: string;

  seededDestination?: string;
  seedPromptShown?: boolean;
};

type StepId =
  | "fromLocation"
  | "destinationSeed"
  | "destinationSelect"
  | "dates"
  | "travellers"
  | "passengerName"
  | "phoneNumber"
  | "email"
  | "nationality"
  | "airline"
  | "hotel"
  | "flightClass"
  | "visa"
  | "summary";

/* Keep flow identical to TripBuilderReceipt */
const STEPS: StepId[] = [
  "fromLocation",
  "destinationSeed",
  "destinationSelect",
  "dates",
  "travellers",
  "passengerName",
  "phoneNumber",
  "email",
  "nationality",
  "airline",
  "hotel",
  "flightClass",
  "visa",
  "summary",
];

/* ---------------- Helpers ---------------- */
function fmtDate(iso?: string) {
  if (!iso) return "";
  try {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString(undefined, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

// map labels like "Dubai, UAE" or "Dubai" back to canonical label
const DESTINATION_LABEL_TO_ID = DESTINATIONS.reduce<Record<string, string>>(
  (acc, dest) => {
    acc[dest.toLowerCase()] = dest;
    const city = dest.split(",")[0].toLowerCase();
    acc[city] = dest;
    return acc;
  },
  {}
);

function destinationSlugFromLabel(label?: string) {
  if (!label) return undefined;
  const key = label.toLowerCase().trim();
  if (DESTINATION_LABEL_TO_ID[key]) return DESTINATION_LABEL_TO_ID[key];
  const parts = label.split(",").map((p) => p.trim());
  if (parts.length >= 2) {
    const recomposedKey = `${parts[0].toLowerCase()}, ${parts[1].toLowerCase()}`;
    return DESTINATION_LABEL_TO_ID[recomposedKey];
  }
  return undefined;
}

/* Quick date presets for true one-click on desktop too */
function addDays(base: Date, days: number) {
  const d = new Date(base);
  d.setDate(d.getDate() + days);
  return d;
}
function iso(d: Date) {
  return d.toISOString().slice(0, 10);
}
function nextSaturday(from = new Date()) {
  const d = new Date(from);
  const day = d.getDay(); // 0 Sun .. 6 Sat
  const delta = (6 - day + 7) % 7 || 7;
  return addDays(d, delta);
}
function weekendEscape(): [string, string] {
  const start = nextSaturday();
  const end = addDays(start, 1); // Sat-Sun
  return [iso(start), iso(end)];
}
function nextNights(n: number): [string, string] {
  const start = addDays(new Date(), 7); // one week from today, civilized
  const end = addDays(start, n);
  return [iso(start), iso(end)];
}

/* ---------------- Component ---------------- */
export default function TripBuilderLite() {
  const router = useRouter();

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    adults: 1,
    children: 0,
    // seededDestination: "Dubai, UAE",
    seedPromptShown: false,
  });

  // Determine current step, but skip destinationSeed if nothing is seeded
  const steps = useMemo(() => {
    if (!answers.seededDestination) {
      return STEPS.filter((s) => s !== "destinationSeed");
    }
    return STEPS;
  }, [answers.seededDestination]);

  const current = steps[idx];

  // submission state
  const [submitting, setSubmitting] = useState<"idle" | "saving" | "saved" | "error">("idle");

  const hasAll = useMemo(() => {
    return Boolean(
      answers.from &&
        (answers.destination || answers.seededDestination) &&
        answers.nationality &&
        answers.startDate &&
        answers.endDate &&
        answers.passengerName?.trim() &&
        (answers.phoneCountryCode || "").trim() &&
        (answers.phoneNumber || "").trim() &&
        (answers.email || "").trim() &&
        answers.airlinePref &&
        answers.hotelPref &&
        answers.flightClass &&
        answers.visaStatus
    );
  }, [answers]);

  // keyboard: arrows for nav, Enter to proceed/submit
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Enter") {
        if (current === "summary") {
          if (hasAll) {
            e.preventDefault();
            submitRequest();
          }
        } else if (canProceed()) {
          e.preventDefault();
          goNext();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, idx, answers, hasAll, submitting]);

  function canProceed(): boolean {
    switch (current) {
      case "fromLocation":
        return !!answers.from;
      case "destinationSeed":
        return true; // user will click Keep/Change buttons
      case "destinationSelect":
        return !!answers.destination;
      case "dates":
        return Boolean(
          answers.startDate &&
            answers.endDate &&
            answers.startDate <= answers.endDate
        );
      case "travellers":
        return (answers.adults ?? 0) >= 1 && (answers.children ?? 0) >= 0;
      case "passengerName":
        return Boolean(answers.passengerName?.trim());
      case "phoneNumber":
        return Boolean(
          (answers.phoneCountryCode || "").trim().length >= 1 &&
            (answers.phoneNumber || "").replace(/\s+/g, "").length >= 6
        );
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email || "");
      case "nationality":
        return !!answers.nationality;
      case "airline":
        return !!answers.airlinePref;
      case "hotel":
        return !!answers.hotelPref;
      case "flightClass":
        return !!answers.flightClass;
      case "visa":
        return !!answers.visaStatus;
      case "summary":
        return true;
      default:
        return false;
    }
  }

  function goNext() {
    if (!canProceed()) return;

    // special routing to mirror receipt flow nuances
    if (current === "fromLocation") {
      const next = answers.seededDestination ? "destinationSeed" : "destinationSelect";
      setIdx(steps.indexOf(next));
      return;
    }
    if (current === "destinationSeed") {
      // user must click Keep/Change buttons; Next just guards
      return;
    }
    setIdx((i) => Math.min(i + 1, steps.length - 1));
  }

  function goPrev() {
    setIdx((i) => Math.max(i - 1, 0));
  }

  // Focus management - focus the question when the section is in view
  const questionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const tripBuilderSection = document.getElementById("trip-builder");
    if (tripBuilderSection) {
      const rect = tripBuilderSection.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.top < window.innerHeight;
      if (isInView && questionRef.current) {
        questionRef.current.focus({ preventScroll: true });
      }
    }
  }, [current]);

  // Small helpers
  function setAndAdvance<K extends keyof Answers>(key: K, value: Answers[K]) {
    setAnswers((a) => ({ ...a, [key]: value }));
    // one-tap auto-advance for choice steps
    const shouldAutoAdvance = [
      "fromLocation",
      "destinationSelect",
      "nationality",
      "airline",
      "hotel",
      "flightClass",
      "visa",
    ].includes(current);
    if (shouldAutoAdvance) {
      setTimeout(() => goNext(), 160);
    }
  }

  // "Keep seeded destination?" actions
  function keepSeeded() {
    if (!answers.seededDestination) return;
    setAnswers((a) => ({
      ...a,
      destination: a.seededDestination,
      seededDestination: undefined,
      seedPromptShown: true,
    }));
    const to = steps.indexOf("dates");
    if (to >= 0) {
      setTimeout(() => setIdx(to), 120);
    }
  }
  function changeDestination() {
    setAnswers((a) => ({ ...a, seededDestination: undefined, seedPromptShown: true }));
    const to = steps.indexOf("destinationSelect");
    if (to >= 0) {
      setTimeout(() => setIdx(to), 120);
    }
  }

  async function submitRequest() {
    if (!hasAll || submitting === "saving") return;

    setSubmitting("saving");

    const payload = {
      origin: answers.from!,
      destination: answers.destination || answers.seededDestination || "",
      nationality: answers.nationality!,
      startDate: answers.startDate!,
      endDate: answers.endDate!,
      adults: answers.adults ?? 1,
      kids: answers.children ?? 0,
      airlinePreference: answers.airlinePref!,
      hotelPreference: answers.hotelPref!,
      flightClass: answers.flightClass!,
      visaStatus: answers.visaStatus!,
      passengerName: answers.passengerName!,
      email: answers.email!,
      phoneCountryCode: answers.phoneCountryCode!,
      phoneNumber: answers.phoneNumber!,
    };

    try {
      const res = await fetch("/api/trip-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const json = await res.json().catch(() => null);
      const createdId =
        json && typeof json === "object" ? (json as { id?: string }).id ?? null : null;

      setSubmitting("saved");

      const params = new URLSearchParams();
      const destId = destinationSlugFromLabel(payload.destination);
      if (destId) params.set("destinationId", destId);

      if (createdId) {
        router.push(`/trip/receipt/${createdId}${params.size ? `?${params}` : ""}`);
      } else {
        router.push(`/trip/receipt${params.size ? `?${params}` : ""}`);
      }
    } catch {
      setSubmitting("error");
    }
  }

  /* -------------- UI labels -------------- */
  const stepTitle = {
    fromLocation: "Where are you traveling from?",
    destinationSeed: "Keep suggested destination?",
    destinationSelect: "Pick a destination",
    dates: "When do you plan to travel?",
    travellers: "How many travelers?",
    passengerName: "Passenger name",
    phoneNumber: "Best phone number",
    email: "Email for your itinerary",
    nationality: "Your nationality",
    airline: "Airline preference",
    hotel: "Hotel preference",
    flightClass: "Flight class",
    visa: "Visa status",
    summary: "Review and submit",
  } as const;

  return (
    <section
      id="trip-builder"
      aria-labelledby="tripbuilder-heading"
      className="relative isolate w-full bg-zinc-950 text-zinc-100"
    >
      {/* Background vignette + subtle linear glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_500px_at_20%_-10%,rgba(255,255,255,0.08)_0%,transparent_60%)]"
      />
      <div className="absolute inset-x-0 top-1/2 -z-10 h-28 overflow-hidden pointer-events-none">
        <div className="glowbar mx-auto h-28 w-[135%]" />
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-10 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-4 py-3">
          <h2 id="tripbuilder-heading" className="text-lg font-semibold text-white sm:text-xl">
            Trip Builder Lite
          </h2>
          <div className="ml-auto flex items-center gap-3">
            <span className="text-xs text-zinc-400">
              Step {idx + 1} of {steps.length}
            </span>
          </div>
        </div>
        <ProgressBar total={steps.length} index={idx} />
      </header>

      {/* Main Canvas */}
      <div className="mx-auto max-w-4xl px-4 pb-24 pt-4 sm:pt-6 md:pb-28">
        <div className="relative rounded-2xl border border-white/12 bg-zinc-950/60 p-0.5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <div className="relative rounded-2xl bg-zinc-950/70">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 [box-shadow:0_0_0_1px_rgba(255,255,255,0.05),0_0_40px_2px_rgba(180,180,255,0.08)_inset]"
            />

            {/* Question card */}
            <div className="px-4 py-5 sm:px-6 sm:py-7">
              <div className="mx-auto grid w-full max-w-2xl gap-5">
                <div className="card">
                  <header className="mb-3">
                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                      {stepTitle[current]}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      {current === "fromLocation" && "Major cities with airports"}
                      {current === "destinationSeed" && "You can change it if needed"}
                      {current === "destinationSelect" && "We’ll refine specifics after you submit"}
                      {current === "dates" && "Select your dates or pick a preset"}
                      {current === "travellers" && "Pick a preset or edit counts"}
                      {current === "passengerName" && "Full legal name as on passport"}
                      {current === "phoneNumber" && "Include your country code"}
                      {current === "email" && "We send your draft itinerary there"}
                      {current === "nationality" && "Used for visa rules"}
                      {current === "airline" && "Optional, helps us shortlist"}
                      {current === "hotel" && "Preferred star level or brand type"}
                      {current === "flightClass" && "We’ll price across cabins"}
                      {current === "visa" && "Tell us where you stand right now"}
                      {current === "summary" && "Double-check before submitting"}
                    </p>
                  </header>

                  {/* Content boxes per step */}
                  <div className="grid w-full gap-5">
                    {current === "fromLocation" && (
                      <ChoiceGridBig
                        options={ORIGIN_CITIES}
                        value={answers.from}
                        onChange={(v) => setAndAdvance("from", v)}
                      />
                    )}

                    {current === "destinationSeed" && answers.seededDestination && (
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <BigButton onClick={keepSeeded} variant="primary" ariaLabel="Keep destination">
                          Keep {answers.seededDestination}
                        </BigButton>
                        <BigButton onClick={changeDestination} variant="ghost" ariaLabel="Change destination">
                          Change destination
                        </BigButton>
                      </div>
                    )}

                    {current === "destinationSelect" && (
                      <ChoiceGridBig
                        options={DESTINATION_CHOICES}
                        value={answers.destination}
                        onChange={(v) => setAndAdvance("destination", v)}
                      />
                    )}

                    {current === "dates" && (
                      <div className="grid gap-5">
                        {/* One-click presets as BOXES */}
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                          <PresetBox
                            label="Weekend escape"
                            hint="Sat → Sun"
                            onClick={() => {
                              const [s, e] = weekendEscape();
                              setAnswers((a) => ({ ...a, startDate: s, endDate: e }));
                              setTimeout(() => goNext(), 140);
                            }}
                          />
                          <PresetBox
                            label="Next 5 nights"
                            hint="1 week from today"
                            onClick={() => {
                              const [s, e] = nextNights(5);
                              setAnswers((a) => ({ ...a, startDate: s, endDate: e }));
                              setTimeout(() => goNext(), 140);
                            }}
                          />
                          <PresetBox
                            label="Next 7 nights"
                            hint="1 week from today"
                            onClick={() => {
                              const [s, e] = nextNights(7);
                              setAnswers((a) => ({ ...a, startDate: s, endDate: e }));
                              setTimeout(() => goNext(), 140);
                            }}
                          />
                        </div>

                        {/* Manual pick, still boxed */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <Labeled field="start-date" label="Start date">
                            <input
                              id="start-date"
                              type="date"
                              value={answers.startDate ?? ""}
                              max={answers.endDate || undefined}
                              onChange={(e) => {
                                const newStartDate = e.target.value;
                                setAnswers((a) => ({ ...a, startDate: newStartDate }));
                                const endDate = answers.endDate;
                                if (newStartDate && endDate && newStartDate <= endDate) {
                                  setTimeout(() => goNext(), 200);
                                }
                              }}
                              className="input input-lg"
                            />
                          </Labeled>
                          <Labeled field="end-date" label="End date">
                            <input
                              id="end-date"
                              type="date"
                              value={answers.endDate ?? ""}
                              min={answers.startDate || undefined}
                              onChange={(e) => {
                                const newEndDate = e.target.value;
                                setAnswers((a) => ({ ...a, endDate: newEndDate }));
                                const startDate = answers.startDate;
                                if (startDate && newEndDate && startDate <= newEndDate) {
                                  setTimeout(() => goNext(), 200);
                                }
                              }}
                              className="input input-lg"
                            />
                          </Labeled>
                        </div>
                      </div>
                    )}

                    {current === "travellers" && (
                      <div className="grid gap-5">
                        {/* One-click presets as BOXES */}
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                          <PresetBox
                            label="Solo"
                            hint="1 adult"
                            onClick={() => {
                              setAnswers((a) => ({ ...a, adults: 1, children: 0 }));
                              setTimeout(() => goNext(), 140);
                            }}
                          />
                          <PresetBox
                            label="Couple"
                            hint="2 adults"
                            onClick={() => {
                              setAnswers((a) => ({ ...a, adults: 2, children: 0 }));
                              setTimeout(() => goNext(), 140);
                            }}
                          />
                          <PresetBox
                            label="Family"
                            hint="2 adults, 2 kids"
                            onClick={() => {
                              setAnswers((a) => ({ ...a, adults: 2, children: 2 }));
                              setTimeout(() => goNext(), 140);
                            }}
                          />
                        </div>

                        {/* Manual controls, still boxed */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <Labeled field="adults" label="Adults">
                            <NumberField
                              id="adults"
                              min={1}
                              value={answers.adults ?? 1}
                              onChange={(n) => {
                                setAnswers((a) => ({ ...a, adults: n }));
                                if (n >= 1 && (answers.children ?? 0) >= 0) {
                                  setTimeout(() => goNext(), 220);
                                }
                              }}
                            />
                          </Labeled>
                          <Labeled field="children" label="Children">
                            <NumberField
                              id="children"
                              min={0}
                              value={answers.children ?? 0}
                              onChange={(n) => {
                                setAnswers((a) => ({ ...a, children: n }));
                                if ((answers.adults ?? 1) >= 1 && n >= 0) {
                                  setTimeout(() => goNext(), 220);
                                }
                              }}
                            />
                          </Labeled>
                        </div>
                      </div>
                    )}

                    {current === "passengerName" && (
                      <Labeled field="pname" label="Full name">
                        <input
                          id="pname"
                          type="text"
                          inputMode="text"
                          placeholder="Type your name"
                          value={answers.passengerName ?? ""}
                          onChange={(e) => {
                            const newName = e.target.value;
                            setAnswers((a) => ({ ...a, passengerName: newName }));
                            if (newName.trim().length >= 2) {
                              setTimeout(() => goNext(), 300);
                            }
                          }}
                          className="input input-lg"
                        />
                      </Labeled>
                    )}

                    {current === "phoneNumber" && (
                      <div className="grid grid-cols-[120px_1fr] gap-3 sm:grid-cols-[140px_1fr]">
                        <Labeled field="pcode" label="Country code">
                          <input
                            id="pcode"
                            type="tel"
                            inputMode="tel"
                            placeholder="+91"
                            value={answers.phoneCountryCode ?? ""}
                            onChange={(e) => {
                              const newCode = e.target.value;
                              setAnswers((a) => ({ ...a, phoneCountryCode: newCode }));
                              const phoneNumber = answers.phoneNumber ?? "";
                              if (newCode.trim().length >= 1 && phoneNumber.replace(/\s+/g, "").length >= 6) {
                                setTimeout(() => goNext(), 260);
                              }
                            }}
                            className="input input-lg"
                          />
                        </Labeled>
                        <Labeled field="pnum" label="Number">
                          <input
                            id="pnum"
                            type="tel"
                            inputMode="tel"
                            placeholder="98765 43210"
                            value={answers.phoneNumber ?? ""}
                            onChange={(e) => {
                              const newNumber = e.target.value;
                              setAnswers((a) => ({ ...a, phoneNumber: newNumber }));
                              const countryCode = answers.phoneCountryCode ?? "";
                              if (countryCode.trim().length >= 1 && newNumber.replace(/\s+/g, "").length >= 6) {
                                setTimeout(() => goNext(), 260);
                              }
                            }}
                            className="input input-lg"
                          />
                        </Labeled>
                      </div>
                    )}

                    {current === "email" && (
                      <Labeled field="email" label="Email">
                        <input
                          id="email"
                          type="email"
                          inputMode="email"
                          placeholder="you@example.com"
                          value={answers.email ?? ""}
                          onChange={(e) => {
                            const newEmail = e.target.value;
                            setAnswers((a) => ({ ...a, email: newEmail }));
                            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
                              setTimeout(() => goNext(), 260);
                            }
                          }}
                          className="input input-lg"
                        />
                      </Labeled>
                    )}

                    {current === "nationality" && (
                      <ChoiceGridBig
                        options={NATIONALITIES}
                        value={answers.nationality}
                        onChange={(v) => setAndAdvance("nationality", v)}
                      />
                    )}

                    {current === "airline" && (
                      <ChoiceGridBig
                        options={AIRLINES}
                        value={answers.airlinePref}
                        onChange={(v) => setAndAdvance("airlinePref", v)}
                      />
                    )}

                    {current === "hotel" && (
                      <ChoiceGridBig
                        options={[...HOTEL_PREFERENCES, "7 Star"]}
                        value={answers.hotelPref}
                        onChange={(v) => setAndAdvance("hotelPref", v)}
                      />
                    )}

                    {current === "flightClass" && (
                      <ChoiceGridBig
                        options={[...FLIGHT_CLASSES, "Premium Economy"]}
                        value={answers.flightClass}
                        onChange={(v) => setAndAdvance("flightClass", v)}
                      />
                    )}

                    {current === "visa" && (
                      <ChoiceGridBig
                        options={VISA_STATUS}
                        value={answers.visaStatus}
                        onChange={(v) => setAndAdvance("visaStatus", v)}
                      />
                    )}

                    {current === "summary" && (
                      <div className="rounded-xl border border-white/12 bg-white/5 p-4">
                        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          <Row term="From" def={answers.from} />
                          <Row term="To" def={answers.destination || answers.seededDestination} />
                          <Row term="Start" def={fmtDate(answers.startDate)} />
                          <Row term="End" def={fmtDate(answers.endDate)} />
                          <Row term="Adults" def={String(answers.adults ?? 0)} />
                          <Row term="Children" def={String(answers.children ?? 0)} />
                          <Row term="Name" def={answers.passengerName} />
                          <Row
                            term="Phone"
                            def={`${answers.phoneCountryCode ?? ""} ${answers.phoneNumber ?? ""}`.trim()}
                          />
                          <Row term="Email" def={answers.email} />
                          <Row term="Nationality" def={answers.nationality} />
                          <Row term="Airline" def={answers.airlinePref} />
                          <Row term="Hotel" def={answers.hotelPref} />
                          <Row term="Class" def={answers.flightClass} />
                          <Row term="Visa" def={answers.visaStatus} />
                        </dl>
                        <p className="mt-3 text-sm text-zinc-400">
                          {submitting === "saving" && "Submitting…"}
                          {submitting === "saved" && "Redirecting…"}
                          {submitting === "error" &&
                            "We couldn’t submit your request. Refresh and try again."}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Sticky Bottom Dock */}
              <div className="sticky bottom-0 z-10 mt-6">
                <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-zinc-950/85 px-4 py-3 backdrop-blur sm:px-6">
                  <button
                    type="button"
                    onClick={goPrev}
                    disabled={idx === 0 || submitting === "saving"}
                    className="btn-ghost disabled:opacity-40"
                  >
                    ← Back
                  </button>

                  {current === "summary" ? (
                    <button
                      type="button"
                      onClick={submitRequest}
                      disabled={!hasAll || submitting === "saving"}
                      className="btn-primary w-40 disabled:opacity-40"
                    >
                      {submitting === "saving" ? "Submitting…" : "Submit →"}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={!canProceed() || submitting === "saving"}
                      className="btn-primary w-32 disabled:opacity-40"
                    >
                      Next →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS helpers for boxed UI, bigger tiles, and one-click affordance */}
      <style jsx>{`
        .card {
          border: 1px solid rgba(255, 255, 255, 0.10);
          background: rgba(255, 255, 255, 0.04);
          border-radius: 1rem;
          padding: 1rem;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
        }

        .input {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          color: white;
          padding: 0.65rem 0.9rem;
          outline: none;
          backdrop-filter: blur(6px);
          transition: border-color 160ms ease, box-shadow 160ms ease, transform 120ms ease;
        }
        .input:focus {
          border-color: rgba(255, 255, 255, 0.28);
          box-shadow: 0 0 0 4px rgba(180, 180, 255, 0.12);
        }
        .input-lg {
          padding: 0.9rem 1rem;
          font-size: 1rem;
        }

        .btn-primary, .btn-ghost {
          border-radius: 0.9rem;
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: white;
          padding: 0.7rem 1rem;
          backdrop-filter: blur(6px);
          transition: transform 80ms ease, background 160ms ease, border-color 160ms ease;
          touch-action: manipulation;
        }
        .btn-primary {
          background: linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06));
        }
        .btn-ghost {
          background: rgba(255, 255, 255, 0.06);
        }
        .btn-primary:active, .btn-ghost:active {
          transform: scale(0.98);
        }

        .choice {
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          color: white;
          padding: 1rem 1rem;
          line-height: 1.2;
          text-align: left;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          transition: transform 80ms ease, background 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
          touch-action: manipulation;
        }
        .choice:hover { background: rgba(255, 255, 255, 0.10); }
        .choice:active { transform: scale(0.98); }
        .choice[data-active="true"] {
          border-color: rgba(255, 255, 255, 0.28);
          background: rgba(255, 255, 255, 0.12);
          box-shadow: 0 4px 24px rgba(140, 140, 255, 0.12) inset;
        }

        .pill {
          display: inline-flex;
          height: 0.9rem;
          width: 0.9rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.35);
        }
        .pill[data-active="true"] { background: white; }
      `}</style>
    </section>
  );
}

/* ---------------- Little building blocks ---------------- */
function Labeled({
  field,
  label,
  children,
}: {
  field: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={field} className="block rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="mb-2 text-xs uppercase tracking-wide text-zinc-400">{label}</div>
      {children}
    </label>
  );
}

function BigButton({
  children,
  onClick,
  variant = "primary",
  ariaLabel,
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "ghost";
  ariaLabel?: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={variant === "primary" ? "btn-primary w-full" : "btn-ghost w-full"}
    >
      {children}
    </button>
  );
}

function ChoiceGridBig({
  options,
  value,
  onChange,
}: {
  options: ReadonlyArray<string>;
  value?: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(opt)}
            className="choice"
            data-active={active ? "true" : "false"}
          >
            <span className="text-base">{opt}</span>
            <span className="pill" data-active={active ? "true" : "false"} />
          </button>
        );
      })}
    </div>
  );
}

function PresetBox({
  label,
  hint,
  onClick,
}: {
  label: string;
  hint?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="choice"
      aria-label={label}
    >
      <div>
        <div className="text-base text-white">{label}</div>
        {hint && <div className="text-xs text-zinc-400 mt-0.5">{hint}</div>}
      </div>
      <span className="pill" data-active="true" />
    </button>
  );
}

function NumberField({
  id,
  min = 0,
  value,
  onChange,
}: {
  id: string;
  min?: number;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="btn-ghost px-3 py-2"
        onClick={() => onChange(Math.max(min, (value || 0) - 1))}
        aria-label="Decrease"
      >
        −
      </button>
      <input
        id={id}
        type="number"
        min={min}
        value={value}
        onChange={(e) => onChange(Number(e.target.value || 0))}
        className="input input-lg text-center"
      />
      <button
        type="button"
        className="btn-ghost px-3 py-2"
        onClick={() => onChange((value || 0) + 1)}
        aria-label="Increase"
      >
        +
      </button>
    </div>
  );
}

function Row({ term, def }: { term: string; def?: string | null }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
      <dt className="text-xs uppercase tracking-wide text-zinc-400">{term}</dt>
      <dd className="mt-1 text-sm text-white">{def || "—"}</dd>
    </div>
  );
}

function ProgressBar({ total, index }: { total: number; index: number }) {
  const pct = Math.max(2, Math.min(100, Math.round(((index + 1) / total) * 100)));
  return (
    <div className="h-1.5 w-full bg-white/10">
      <div
        className="h-full bg-white transition-[width] duration-300 ease-out"
        style={{ width: `${pct}%` }}
        aria-hidden
      />
    </div>
  );
}
