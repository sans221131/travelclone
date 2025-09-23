// components/sections/Carousel.tsx
"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type Place = {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  alt?: string;
};

type CarouselProps = {
  id?: string;
  title?: string;
  items: Place[];
  darkOverlay?: number;
  overshootPx?: number;
  whipMs?: number;
  respectReducedMotion?: boolean;
};

export default function Carousel({
  id = "destinations",
  title = "Top Picks",
  items,
  darkOverlay = 0.25,
  overshootPx = 120,
  whipMs = 720,
  respectReducedMotion = true,
}: CarouselProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const centersRef = useRef<number[]>([]);
  const [active, setActive] = useState(0);
  const [gutters, setGutters] = useState({ left: 0, right: 0 });
  const [dramatic, setDramatic] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<Set<string>>(new Set());

  // roulette state
  const [isRouletting, setIsRouletting] = useState(false);
  const [rouletteTarget, setRouletteTarget] = useState<number | null>(null);
  const timeoutsRef = useRef<number[]>([]);

  // Pills (bottom bar)
  const pillsRef = useRef<HTMLDivElement | null>(null);
  const pillBtnRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [pillsH, setPillsH] = useState(0); // dynamic height of pills bar

  const pointerRef = useRef<HTMLDivElement | null>(null);

  const prefersReduced =
    respectReducedMotion &&
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const overlay = Math.max(0, Math.min(1, darkOverlay));

  /* ---------- Measurement ---------- */
  const measureAll = () => {
    const root = scrollerRef.current;
    if (!root) return;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    // center-first gutter (assumes equal card width)
    const sample = cards[0];
    const viewport = root.clientWidth;
    const cardW = sample.getBoundingClientRect().width;
    const gutter = Math.max(0, Math.round((viewport - cardW) / 2));
    setGutters({ left: gutter, right: gutter });

    // compute card centers in scroll coordinates after padding applies
    requestAnimationFrame(() => {
      const c: number[] = [];
      for (const el of cards) c.push(el.offsetLeft + el.clientWidth / 2);
      centersRef.current = c;
    });

    // measure pills height if (wraps on desktop; changes on resize)
    if (pillsRef.current) setPillsH(pillsRef.current.offsetHeight);
  };

  useEffect(() => {
    measureAll();
    const root = scrollerRef.current;
    if (!root) return;

    const ro = new ResizeObserver(measureAll);
    ro.observe(root);

    // observe pills height
    let roPills: ResizeObserver | null = null;
    if (pillsRef.current) {
      roPills = new ResizeObserver(() => {
        if (pillsRef.current) setPillsH(pillsRef.current.offsetHeight);
      });
      roPills.observe(pillsRef.current);
    }

    return () => {
      ro.disconnect();
      if (roPills) roPills.disconnect();

      // cleanup any pending roulette timeouts on unmount
      timeoutsRef.current.forEach((id) => clearTimeout(id));
      timeoutsRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  /* ---------- Scroll brain (no per-frame rect reads) ---------- */
  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;
        const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
        if (!cards.length) return;
        const centers = centersRef.current;
        if (!centers.length) return;

        const viewCenter = root.scrollLeft + root.clientWidth / 2;
        let bestIdx = active;
        let bestDelta = Number.POSITIVE_INFINITY;

        const isMobile =
          typeof window !== "undefined" && window.innerWidth < 768;
        const baseIntensity = dramatic ? 1.0 : 0.65;
        const blurMax = dramatic
          ? isMobile
            ? 2
            : 3
          : isMobile
          ? 1
          : 1.5;

        for (let i = 0; i < cards.length; i++) {
          const el = cards[i];
          const delta = centers[i] - viewCenter;
          const d = Math.abs(delta);
          if (d < bestDelta) {
            bestDelta = d;
            bestIdx = i;
          }

          // Skip applying scroll effects during roulette to let CSS styling work
          if (isRouletting) {
            // Only update the active index during roulette, don't apply visual effects
            continue;
          }

          const t = Math.max(-1, Math.min(1, delta / (root.clientWidth / 2)));
          const depth = 1 - Math.min(1, Math.abs(t));
          const rot = -t * 18 * baseIntensity;
          const scale = 0.86 + depth * 0.14;
          const opacity = 0.55 + depth * 0.45;
          const blur = Math.max(0, Math.abs(t) * blurMax);

          el.style.transform = `translateZ(0) perspective(1000px) rotateY(${rot}deg) scale(${scale})`;
          el.style.opacity = `${opacity}`;

          const img = el.querySelector<HTMLElement>("[data-img]");
          if (img) {
            img.style.filter = `blur(${blur}px) saturate(${
              0.6 + depth * 0.4
            }) brightness(${0.8 + depth * 0.2})`;
          }
        }

        if (bestIdx !== active) setActive(bestIdx);
      });
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => root.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dramatic, items.length]);

  /* ---------- Programmatic scroll ---------- */
  const animateScrollTo = (left: number, ms: number) => {
    const root = scrollerRef.current;
    if (!root) return;

    if (ms <= 0) {
      root.scrollLeft = left;
      return;
    }

    const start = root.scrollLeft;
    const change = left - start;
    const startTime = performance.now();
    const duration = Math.max(1, ms);

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const node = scrollerRef.current;
      if (!node) return; // stop if unmounted
      node.scrollLeft = start + change * easeInOutCubic(t);
      if (t < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const centerIndex = (idx: number, ms = 500) => {
    const root = scrollerRef.current;
    const centers = centersRef.current;
    if (!root || !centers.length) return;
    const clamped = Math.max(0, Math.min(centers.length - 1, idx));
    const targetLeft = centers[clamped] - root.clientWidth / 2;
    animateScrollTo(targetLeft, prefersReduced ? 0 : ms);
  };

  const centerPill = (i: number) => {
    const bar = pillsRef.current;
    const btn = pillBtnRefs.current[i];
    if (!bar || !btn) return;
    const left = btn.offsetLeft - bar.clientWidth / 2 + btn.clientWidth / 2;
    bar.scrollTo({ left, behavior: prefersReduced ? "auto" : "smooth" });
  };

  const whipTo = (idx: number) => {
    const root = scrollerRef.current;
    const centers = centersRef.current;
    if (!root || !centers.length) return;
    const clamped = Math.max(0, Math.min(centers.length - 1, idx));
    const baseLeft = centers[clamped] - root.clientWidth / 2;
    const dir = baseLeft > root.scrollLeft ? 1 : -1;
    const overshoot = prefersReduced ? 0 : overshootPx * dir;

    setDramatic(true);
    animateScrollTo(baseLeft + overshoot, Math.round(whipMs * 0.6));
    const t1 = window.setTimeout(() => {
      animateScrollTo(baseLeft, Math.round(whipMs * 0.4));
      const t2 = window.setTimeout(
        () => setDramatic(false),
        Math.round(whipMs * 0.45)
      );
      timeoutsRef.current.push(t2);
    }, Math.round(whipMs * 0.6));
    timeoutsRef.current.push(t1);

    centerPill(clamped);
  };

  // Touch gesture handlers
  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null || isRouletting) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      const nextIndex = Math.min(items.length - 1, active + 1);
      rouletteToDestination(nextIndex);
    } else if (isRightSwipe) {
      const prevIndex = Math.max(0, active - 1);
      rouletteToDestination(prevIndex);
    }
  };

  const handleImageLoad = (imageId: string) => {
    setImagesLoaded((prev) => new Set(prev).add(imageId));
  };

  const clearRouletteTimers = () => {
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];
  };

  const rouletteToDestination = (targetIndex: number) => {
    if (isRouletting) return; // Prevent stacking roulettes
    clearRouletteTimers();

    setIsRouletting(true);
    setRouletteTarget(targetIndex);

    const root = scrollerRef.current;
    const centers = centersRef.current;
    if (!root || !centers.length || !pointerRef.current) return;

    // Animate pointer to point right when roulette starts
    gsap.to(pointerRef.current, {
      rotation: 45, // Point to the right during roulette
      duration: 0.5,
      ease: "power2.out",
    });

    const currentIndex = active;
    const totalItems = items.length;

    // Calculate full circle + target position
    const fullCircle = totalItems;
    const extraRotations = Math.floor(Math.random() * 2) + 1; // 1-2 extra rotations
    const totalSteps =
      fullCircle * extraRotations +
      ((targetIndex - currentIndex + totalItems) % totalItems);

    let currentStep = 0;
    const baseSpeed = 60;

    const rouletteStep = () => {
      if (currentStep >= totalSteps) {
        const tFin = window.setTimeout(() => {
          setActive(targetIndex);
          centerIndex(targetIndex, 800);
          centerPill(targetIndex);

          // Animate pointer back to pointing down with physics bounce
          gsap.to(pointerRef.current, {
            rotation: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.3)",
            delay: 0.2,
          });

          const tEnd = window.setTimeout(() => {
            setIsRouletting(false);
            setRouletteTarget(null);
          }, 800);
          timeoutsRef.current.push(tEnd);
        }, 300);
        timeoutsRef.current.push(tFin);
        return;
      }

      const nextIndex = (currentIndex + currentStep + 1) % totalItems;

      // Enhanced realistic deceleration like real roulette
      const progress = currentStep / totalSteps;
      let delay = baseSpeed;
      if (progress < 0.5) {
        // Fast spinning phase (50% of rotation)
        delay = baseSpeed;
      } else if (progress < 0.7) {
        // Start slowing down (20% of rotation)
        const slowProgress = (progress - 0.5) / 0.2;
        delay = baseSpeed + slowProgress * baseSpeed;
      } else if (progress < 0.85) {
        // Significant slowdown (15% of rotation)
        const slowProgress = (progress - 0.7) / 0.15;
        delay = baseSpeed * 2 + slowProgress * baseSpeed * 2;
      } else if (progress < 0.95) {
        // Major slowdown (10% of rotation)
        const slowProgress = (progress - 0.85) / 0.1;
        delay = baseSpeed * 4 + slowProgress * baseSpeed * 3;
      } else {
        // Final crawl (last 5% - very slow)
        const slowProgress = (progress - 0.95) / 0.05;
        delay = baseSpeed * 7 + slowProgress * baseSpeed * 5;
      }

      // Add realistic physics variation
      const variation = Math.random() * 0.3 - 0.15; // ±15% variation
      delay *= 1 + variation;

      // Realistic pointer physics - wobble left and right with each step
      if (pointerRef.current) {
        const wobbleIntensity = Math.max(0.1, 1 - progress); // Less wobble as it slows
        const wobbleDirection = currentStep % 2 === 0 ? 1 : -1;
        const wobbleAmount = wobbleDirection * wobbleIntensity * 12; // moderate angle
        gsap.to(pointerRef.current, {
          rotation: 45 + wobbleAmount, // Base angle of 45°
          duration: Math.min(delay / 1000, 0.3),
          ease: "power1.out",
        });
      }

      setActive(nextIndex);
      centerIndex(nextIndex, Math.min(300, delay * 2));

      currentStep++;
      const tid = window.setTimeout(rouletteStep, Math.max(80, delay));
      timeoutsRef.current.push(tid);
    };

    rouletteStep();
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (isRouletting) return; // block during roulette
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      rouletteToDestination(Math.min(items.length - 1, active + 1));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      rouletteToDestination(Math.max(0, active - 1));
    } else if (e.key === "Home") {
      e.preventDefault();
      rouletteToDestination(0);
    } else if (e.key === "End") {
      e.preventDefault();
      rouletteToDestination(items.length - 1);
    } else if (e.key >= "1" && e.key <= "9") {
      e.preventDefault();
      const index = parseInt(e.key) - 1;
      if (index < items.length) rouletteToDestination(index);
    }
  };

  useEffect(() => {
    centerPill(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <section
      id={id}
      aria-label={title}
      className="relative w-full h-[100svh] min-h-[100svh] bg-black text-white"
      style={{ height: "100svh" }}
    >
      {/* Header */}
      <div className="absolute top-0 inset-x-0 z-10 bg-gradient-to-b from-black/50 via-black/20 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 lg:pt-6">
          <div className="text-center">
            <h2 className="text-6xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
              {title}
            </h2>
            <p
              className="text-sm sm:text-base text-white/80 mt-1 drop-shadow-md"
              aria-live="polite"
            >
              {isRouletting
                ? "🎲 Selecting destination..."
                : "Discover your next adventure"}
            </p>
          </div>
        </div>
      </div>

      {/* Roulette pointer */}
      <div className="absolute top-[110px] sm:top-[130px] md:top-[150px] left-1/2 -translate-x-1/2 z-30">
        <div
          className={`transition-transform duration-300 ${
            isRouletting ? "scale-110" : "scale-100"
          }`}
        >
          <div className="relative flex items-center justify-center">
            {/* triangle built with borders; color controlled by text-* and border-t-current */}
            <div
              ref={pointerRef}
              className="w-0 h-0 drop-shadow-lg text-yellow-400 border-l-[8px] border-r-[8px] border-t-[28px] border-l-transparent border-r-transparent border-t-current"
              style={{ transformOrigin: "50% 0%" }}
            />
            {/* glow */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full blur-sm bg-yellow-400/40" />
          </div>
        </div>
      </div>

      {/* Carousel rail */}
      <div
        ref={scrollerRef}
        className="absolute left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 top-[120px] sm:top-[140px] md:top-[160px] overflow-x-auto overflow-y-hidden no-scrollbar overscroll-x-contain snap-x snap-mandatory snap-always flex items-center gap-6 sm:gap-8 focus:outline-none"
        style={{
          paddingLeft: `${gutters.left}px`,
          paddingRight: `${gutters.right}px`,
          bottom: `${Math.max(64, pillsH + 24)}px`, // small breathing room above pills
        }}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        aria-roledescription="carousel"
        aria-label={title}
      >
        {items.map((p, i) => (
          <div
            key={p.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="relative snap-center shrink-0 transition-transform duration-300 will-change-transform cursor-pointer touch-manipulation"
            style={{ width: "clamp(240px, 70vw, 720px)" }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${p.title} (${i + 1} of ${items.length})`}
          >
            {/* Mobile-optimized aspect ratio - closer to portrait but not exactly 9:16 */}
            <div
              className={`relative aspect-[10/16] md:aspect-[16/9] w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-black/50 group transition-all duration-500 ${
                i === active
                  ? "ring-4 ring-white/90 ring-offset-4 ring-offset-black scale-105"
                  : "ring-1 ring-white/20"
              }`}
              style={
                isRouletting && i === active
                  ? {
                      // Force selection styling during roulette
                      transform: "scale(1.05)",
                      filter: "brightness(1.1) saturate(1.1)",
                      zIndex: 10,
                    }
                  : {}
              }
            >
              {/* Force selection ring during roulette */}
              {isRouletting && i === active && (
                <div className="absolute -inset-1 rounded-3xl ring-4 ring-white/90 ring-offset-4 ring-offset-black pointer-events-none" />
              )}

              {/* Same radiating highlight for active card whether rouletting or static */}
              {i === active && (
                <>
                  <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-[radial-gradient(closest-side,rgba(255,255,255,0.30),rgba(255,255,255,0.10),transparent)] animate-pulse" />
                  <div
                    className="pointer-events-none absolute -inset-4 rounded-3xl bg-[radial-gradient(closest-side,rgba(255,255,255,0.20),rgba(255,255,255,0.05),transparent)] animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                </>
              )}

              {/* Loading skeleton */}
              {!imagesLoaded.has(p.id) && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 animate-pulse">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
                  <div className="absolute bottom-4 left-4 right-4 space-y-2">
                    <div className="h-6 bg-white/20 rounded-lg animate-pulse" />
                    <div className="h-4 bg-white/10 rounded w-2/3 animate-pulse" />
                  </div>
                </div>
              )}

              <Image
                data-img
                src={p.image}
                alt={p.alt || p.title}
                fill
                sizes="(min-width: 1024px) 60vw, (min-width: 640px) 70vw, 80vw"
                className={`object-cover object-center transition-[filter,transform,opacity] duration-500 group-hover:scale-105 ${
                  imagesLoaded.has(p.id) ? "opacity-100" : "opacity-0"
                }`}
                priority={i === 0}
                onLoad={() => handleImageLoad(p.id)}
              />

              <div className="absolute inset-0 bg-black" style={{ opacity: overlay }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30" />

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="space-y-2">
                  <div className="text-xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-lg">
                    {p.title}
                  </div>

                  {p.subtitle ? (
                    <div className="text-sm sm:text-lg text-white/90 drop-shadow-md font-medium">
                      {p.subtitle}
                    </div>
                  ) : (
                    <div className="text-sm sm:text-base text-white/75 drop-shadow-md">
                      Discover amazing destinations
                    </div>
                  )}

                  <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/30 transition-all duration-200 border border-white/30">
                      <span>Explore</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Enhanced mobile roulette effects */}
              {isRouletting && (
                <>
                  {/* Mobile-specific spinning effect */}
                  <div className="md:hidden absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-radial from-yellow-400/30 via-red-400/20 to-transparent animate-spin"></div>
                    <div className="absolute inset-2 bg-gradient-radial from-transparent via-white/10 to-transparent animate-pulse"></div>
                  </div>
                  {/* Spinning border effect for mobile */}
                  <div className="md:hidden absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-400 via-yellow-400 to-red-400 animate-spin opacity-75"></div>
                </>
              )}

              {/* Mobile swipe indicator - only show on first card when not rouletting */}
              {i === 0 && !isRouletting && (
                <div className="md:hidden absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs text-white/90 pointer-events-none border border-white/20 animate-bounce">
                  Swipe →
                </div>
              )}

              {/* Shimmer for active card */}
              {i === active && !isRouletting && (
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
              )}
            </div>
          </div>
        ))}

        <div className="shrink-0 w-[1px]" aria-hidden />
      </div>

      {/* Pills Navigation */}
      <div className="absolute bottom-3 inset-x-0 z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* edge fades on mobile */}
            <div className="pointer-events-none md:hidden absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
            <div className="pointer-events-none md:hidden absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-black via-black/70 to-transparent z-10" />

            <div
              ref={pillsRef}
              role="tablist"
              aria-label="Destinations filter"
              className=" flex flex-nowrap items-center gap-2 overflow-x-auto no-scrollbar py-1 snap-x snap-mandatory md:flex-wrap md:overflow-visible md:snap-none md:justify-center "
            >
              {items.map((p, i) => (
                <button
                  key={p.id}
                  ref={(el) => {
                    pillBtnRefs.current[i] = el;
                  }}
                  onClick={() => rouletteToDestination(i)}
                  role="tab"
                  aria-selected={i === active}
                  aria-controls={`${id}-slide-${i}`}
                  disabled={isRouletting}
                  className={` relative snap-center whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 backdrop-blur-sm min-w-[80px] text-center hover:scale-105 active:scale-95 touch-manipulation ${
                    isRouletting ? "opacity-75" : ""
                  } ${
                    i === rouletteTarget && isRouletting
                      ? "border-yellow-400 text-yellow-300 bg-yellow-400/20 shadow-lg shadow-yellow-400/50 scale-110"
                      : i === active
                      ? "border-white/80 text-white bg-white/15 md:bg-white md:text-black md:border-white md:shadow-lg shadow-white/25 scale-105"
                      : "border-white/30 text-white/90 hover:bg-white/10 hover:border-white/50 shadow-lg shadow-black/25"
                  }`}
                >
                  <span className="inline-block translate-y-[0.5px] tracking-wide">
                    {p.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
