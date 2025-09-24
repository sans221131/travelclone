// app/activities/[id]/page.tsx
export const runtime = "nodejs";
export const revalidate = 0;

import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import AddToTripButton from "@/components/activities/AddToTripButton";
import { getActivityById } from "@/lib/db";

/* ---------------- utils ---------------- */
function priceLabel(price: unknown, currency?: string | null) {
  if (price == null) return "Price on request";
  const num = typeof price === "string" ? parseFloat(price) : (price as number);
  if (!isFinite(num)) return "Price on request";
  const cur = currency ?? "";
  const val = Intl.NumberFormat("en-IN").format(num);
  return `${cur} ${val}`.trim();
}

function formatDate(dateString: string | Date) {
  try {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short", 
      year: "numeric",
    });
  } catch {
    return "Unknown";
  }
}

/* ---------------- page ---------------- */
export default async function ActivityDetailPage(props: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ tripId?: string }>;
}) {
  const { id } = await props.params;
  const sp = (await props.searchParams) ?? {};
  const tripId = sp.tripId;

  console.log("ActivityDetailPage called with:", { id, tripId });

  const activity = await getActivityById(id);

  if (!activity) {
    console.log("Activity not found:", id);
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        {activity.imageUrl ? (
          <Image
            src={activity.imageUrl}
            alt={activity.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-zinc-900">
            <div className="text-center text-zinc-400">
              <svg className="mx-auto h-20 w-20 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <p className="mt-2">No image available</p>
            </div>
          </div>
        )}
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-zinc-950/20" />
        
        {/* Back button */}
        <Link 
          href={tripId ? `/trip/receipt/${tripId}` : '/'}
          className="absolute left-4 top-4 z-10 rounded-full bg-black/60 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/80"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>

        {/* Activity Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              {activity.destinationId}
            </div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {activity.name}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-200">
              <div className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {activity.reviewCount > 0 ? `${activity.reviewCount} reviews` : 'New activity'}
              </div>
              <div className="text-2xl font-semibold">
                {priceLabel(activity.price, activity.currency)}
                {activity.price != null && (
                  <span className="ml-2 text-sm font-normal text-zinc-300">per person</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950"></div>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-950 to-transparent"></div>
        
        <div className="relative mx-auto max-w-4xl px-6 py-12">
          {/* Action Bar */}
          <div className="mb-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="text-sm text-zinc-300">
              Ready to add this to your trip?
            </div>
            <div className="flex items-center gap-3">
              {tripId && (
                <AddToTripButton
                  tripRequestId={tripId}
                  activityId={activity.id}
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-medium text-white transition-all hover:from-blue-700 hover:to-blue-800 disabled:opacity-60"
                />
              )}
              <button className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/20">
                Share Activity
              </button>
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/2 p-6 backdrop-blur-sm">
            <h2 className="mb-4 text-xl font-semibold text-white">About This Activity</h2>
            <div className="prose prose-invert max-w-none">
              <p className="leading-relaxed text-zinc-300">
                {activity.description || "No description available for this activity."}
              </p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Pricing Details */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/2 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-semibold text-white">Pricing Information</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-300">Base Price</span>
                  <span className="font-medium text-white">
                    {priceLabel(activity.price, activity.currency)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-300">Currency</span>
                  <span className="font-medium text-white">
                    {activity.currency || 'Not specified'}
                  </span>
                </div>
                <div className="mt-4 rounded-lg bg-blue-500/10 p-3 text-xs text-blue-300">
                  💡 Final pricing may vary based on group size, season, and availability.
                </div>
              </div>
            </div>

            {/* Activity Stats */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/2 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-semibold text-white">Activity Details</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-300">Location</span>
                  <span className="font-medium text-white capitalize">
                    {activity.destinationId.replace(/-/g, ' ')}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-300">Reviews</span>
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium text-white">
                      {activity.reviewCount > 0 ? activity.reviewCount : 'No reviews yet'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-300">Added</span>
                  <span className="font-medium text-white">
                    {formatDate(activity.createdAt)}
                  </span>
                </div>
                <div className="mt-4 rounded-lg bg-emerald-500/10 p-3 text-xs text-emerald-300">
                  ✅ This activity is currently available for booking
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          {!tripId && (
            <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 text-center backdrop-blur-sm">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Want to add this to your trip?
              </h3>
              <p className="mb-4 text-sm text-zinc-300">
                Create a trip request first, then you can add activities like this one.
              </p>
              <Link 
                href="/"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-medium text-white transition-all hover:from-blue-700 hover:to-blue-800"
              >
                Create Trip Request
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}