// app/trip/receipt/[id]/page.tsx
export const runtime = "nodejs";
export const revalidate = 0;

import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getTripRequest,
  getActivitiesForReceipt,
  getActivitiesByDestinationId,
  type Activity,
} from "../../../../lib/db";

/* ---------------- utils ---------------- */
function fmtDate(d: string) {
  try {
    return new Date(d + "T00:00:00").toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return d;
  }
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// Map destination display names to normalized database destination_ids
function getDestinationId(destination: string): string {
  const normalized = destination.toLowerCase().trim();

  const mappings: Record<string, string> = {
    "dubai, uae": "dubai-uae",
    dubai: "dubai-uae",
    "paris, france": "paris-france",
    paris: "paris-france",
    "bangkok, thailand": "bangkok-thailand",
    bangkok: "bangkok-thailand",
    singapore: "singapore-singapore",
  };

  if (mappings[normalized]) return mappings[normalized];
  return slugify(destination);
}

// generate stable invoice-like reference from UUID
function refFromId(id: string) {
  const base = id.replace(/-/g, "").slice(0, 6).toUpperCase();
  return `INV-${base}`;
}

// deterministic tiny barcode from ref
function Barcode({ refText }: { refText: string }) {
  let seed = 7;
  for (const ch of refText) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;

  const bars = Array.from({ length: 28 }).map((_, i) => {
    seed = (1664525 * seed + 1013904223) >>> 0;
    const w = 2 + (seed % 3); // 2..4 px
    const tall = (seed >> 2) % 4 !== 0; // 75% tall bars
    return { key: i, w, tall };
  });

  return (
    <div className="relative mx-auto h-28 w-16 overflow-hidden rounded-md bg-gradient-to-b from-zinc-800/30 to-zinc-900/30 ring-1 ring-white/10">
      <div className="absolute inset-0 flex items-end gap-[2px] px-1 pb-1">
        {bars.map(({ key, w, tall }) => (
          <div
            key={key}
            className="bg-white/95"
            style={{
              width: `${w}px`,
              height: tall ? "92%" : "55%",
              borderRadius: "1px",
            }}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}

// price formatter for numeric that might be string
function priceLabel(price: unknown, currency?: string | null) {
  if (price == null) return "Price on request";
  const num = typeof price === "string" ? parseFloat(price) : (price as number);
  if (!isFinite(num)) return "Price on request";
  const cur = currency ?? "";
  const val = Intl.NumberFormat("en-IN").format(num);
  return `${cur} ${val}`.trim();
}

// tiny helper so TypeScript stops whining where it shouldn't
function totalPax(n: number) {
  return `${n} total`;
}

/* ---------------- page ---------------- */
export default async function ReceiptPage(props: {
  // Next.js 15: params and searchParams are async
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ destinationId?: string }>;
}) {
  // Await params before touching its properties
  const { id } = await props.params;
  const sp = (await props.searchParams) ?? {};

  console.log("ReceiptPage called with id:", id);

  let tr;
  try {
    tr = await getTripRequest(id);
    console.log("Trip request result:", tr ? "found" : "not found");
  } catch (error) {
    console.error("Error in ReceiptPage getTripRequest:", error);
    notFound();
  }

  if (!tr) {
    console.log("Trip request not found, calling notFound()");
    notFound();
  }

  // Always normalize to an ID even if a pretty name is provided in the URL
  const rawDestination = sp.destinationId?.trim() || tr.destination;
  const destinationId = getDestinationId(rawDestination);

  console.log("Receipt page debug:", {
    tripDestination: tr.destination,
    mappedDestinationId: destinationId,
    searchParamsDestinationId: sp.destinationId,
  });

  // Curated activities + suggestions (fallback to simple by-destination query)
  let activities: Activity[] = [];
  try {
    const { selected, suggestions } = await getActivitiesForReceipt(
      id,
      destinationId,
      18
    );
    activities = [...selected, ...suggestions];
  } catch {
    activities = await getActivitiesByDestinationId(destinationId, 18);
  }

  const invRef = refFromId(tr.id);
  const totalPaxValue = (tr.adults ?? 0) + (tr.kids ?? 0);

  return (
    <section className="relative isolate min-h-[60vh] w-full bg-zinc-950 text-zinc-100">
      {/* backdrop treatments */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_500px_at_20%_-10%,rgba(255,255,255,0.08)_0%,transparent_60%)]"
      />
      <div className="absolute inset-x-0 top-1/2 -z-10 h-32 overflow-hidden pointer-events-none">
        <div className="glowbar mx-auto h-32 w-[135%]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* Ticket */}
        <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-b from-zinc-950/70 to-zinc-900/60 p-0.5 backdrop-blur">
          <div className="relative rounded-[28px] bg-zinc-950/60 p-5 sm:p-6">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10 [box-shadow:0_0_0_1px_rgba(255,255,255,0.04),0_0_40px_2px_rgba(180,180,255,0.08)_inset]"
            />

            {/* main row */}
            <div className="grid grid-cols-[92px_1fr_auto] items-start gap-4 sm:gap-6">
              {/* left: ref + barcode */}
              <div className="flex flex-col items-center justify-between">
                <div className="w-full text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                  Ref
                </div>
                <div className="mt-1 text-xs font-semibold text-white">
                  {invRef}
                </div>
                <div className="my-3 h-px w-full border-t border-dashed border-white/15" />
                <Barcode refText={invRef} />
              </div>

              {/* center: invoice info */}
              <div className="min-w-0">
                <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                  <span>Invoice</span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-lg bg-white/[0.04] p-3 ring-1 ring-white/10">
                    <div className="text-[10px] uppercase tracking-wide text-zinc-400">
                      Date
                    </div>
                    <div className="mt-1 text-sm text-white">
                      {fmtDate(tr.createdAt.toString().slice(0, 10))}
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/[0.04] p-3 ring-1 ring-white/10">
                    <div className="text-[10px] uppercase tracking-wide text-zinc-400">
                      Bill to
                    </div>
                    <div className="mt-1 truncate text-sm text-white">
                      {tr.passengerName}
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/[0.04] p-3 ring-1 ring-white/10">
                    <div className="text-[10px] uppercase tracking-wide text-zinc-400">
                      Route
                    </div>
                    <div className="mt-1 truncate text-sm text-white">
                      {tr.origin}{" "}
                      <span className="mx-1 text-zinc-400">→</span>{" "}
                      {tr.destination}
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-lg bg-white/[0.04] p-3 ring-1 ring-white/10">
                    <div className="text-[10px] uppercase tracking-wide text-zinc-400">
                      Travel dates
                    </div>
                    <div className="mt-1 text-sm text-white">
                      {fmtDate(tr.startDate)}{" "}
                      <span className="mx-1 text-zinc-400">→</span>{" "}
                      {fmtDate(tr.endDate)}
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/[0.04] p-3 ring-1 ring-white/10">
                    <div className="text-[10px] uppercase tracking-wide text-zinc-400">
                      Travellers
                    </div>
                    <div className="mt-1 text-sm text-white">
                      {tr.adults} adult{tr.adults === 1 ? "" : "s"}
                      {tr.kids
                        ? `, ${tr.kids} child${tr.kids === 1 ? "" : "ren"}`
                        : ""}{" "}
                      <span className="text-zinc-400">
                        ({totalPax((tr.adults ?? 0) + (tr.kids ?? 0))})
                      </span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/[0.04] p-3 ring-1 ring-white/10">
                    <div className="text-[10px] uppercase tracking-wide text-zinc-400">
                      Contact
                    </div>
                    <div className="mt-1 text-sm text-white">
                      {`${tr.phoneCountryCode ?? ""} ${tr.phoneNumber ?? ""}`
                        .trim() || "—"}
                    </div>
                  </div>
                </div>

                {/* dashed cut line */}
                <div className="my-5 h-px w-full border-t border-dashed border-white/15" />

                {/* pay using ref + input mock */}
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm text-zinc-300">
                    Pay using reference{" "}
                    <span className="rounded bg-white/10 px-2 py-0.5 text-white">
                      {invRef}
                    </span>
                  </div>
                  <div className="flex w-full max-w-lg items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 ring-1 ring-white/10">
                    <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide text-white">
                      INV
                    </span>
                    <input
                      readOnly
                      value={invRef}
                      className="w-full bg-transparent text-sm text-white outline-none placeholder-zinc-400"
                      aria-label="Invoice reference"
                    />
                    <button
                      type="button"
                      className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white hover:bg-white/20"
                    >
                      Review →
                    </button>
                  </div>
                </div>
              </div>

              {/* right: amount + preview */}
              <div className="flex flex-col items-end gap-3">
                <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                  Amount
                </div>
                <div className="text-right">
                  <div className="text-xl font-semibold text-white">—</div>
                  <div className="text-xs text-zinc-500">To be quoted</div>
                </div>
                <button
                  type="button"
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20"
                >
                  Preview
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Activities grid */}
        <div className="mt-10">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Activities in {tr.destination}
            </h2>
            <span className="text-xs text-zinc-400">
              {activities.length} found
            </span>
          </div>

          {activities.length === 0 ? (
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center text-zinc-300">
              No activities found for this destination yet. We’ll add options
              during planning.
            </div>
          ) : (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activities.map((a) => (
                <li
                  key={a.id}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    {a.imageUrl ? (
                      <Image
                        src={a.imageUrl}
                        alt={a.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        priority={false}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-zinc-800/60 text-zinc-400">
                        No image
                      </div>
                    )}
                    <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-0.5 text-[10px] uppercase tracking-wide text-white ring-1 ring-white/20">
                      {a.destinationId}
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="line-clamp-2 text-sm font-medium text-white">
                      {a.name}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400">
                      {typeof a.reviewCount === "number" &&
                      a.reviewCount > 0 ? (
                        <span>★ {a.reviewCount} reviews</span>
                      ) : (
                        <span>New</span>
                      )}
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-sm text-white">
                        {priceLabel(a.price, a.currency)}
                        {a.price != null ? (
                          <span className="ml-1 text-xs text-zinc-400">
                            from
                          </span>
                        ) : null}
                      </div>
                      <span className="text-xs text-zinc-500">Enquire</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
