module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/hero/HeroStatic.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/hero/HeroStatic.tsx
__turbopack_context__.s([
    "default",
    ()=>HeroStatic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const CARDS = [
    {
        id: "himachal",
        img: "/hero/himachal.jpg",
        video: "/hero/himachal.mp4",
        alt: "Himachal",
        className: "absolute -left-6 bottom-6 rotate-[-10deg]",
        label: "Himachal"
    },
    {
        id: "bali",
        img: "/hero/bali.jpg",
        video: "/hero/bali.mp4",
        alt: "Bali",
        className: "absolute left-1/4 bottom-0 rotate-[5deg]",
        label: "Bali"
    },
    {
        id: "paris",
        img: "/hero/paris.jpg",
        video: "/hero/paris.mp4",
        alt: "Paris",
        className: "absolute right-1/4 bottom-10 rotate-[-4deg]",
        label: "Paris"
    },
    {
        id: "dubai",
        img: "/hero/dubai.jpg",
        video: "/hero/dubai.mp4",
        alt: "Dubai",
        className: "absolute -right-6 bottom-4 rotate-[12deg]",
        label: "Dubai"
    }
];
function HeroStatic() {
    const hostRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pinRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const thumbRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const videoRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const labelRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const mobileRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mobileVideoRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const prefersReduced = "undefined" !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!hostRef.current || !pinRef.current) return;
        // initial states
        Object.values(thumbRefs.current).forEach((el)=>{
            if (!el) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
                y: 160,
                opacity: 0,
                scale: 0.95
            });
        });
        Object.values(videoRefs.current).forEach((v)=>{
            if (!v) return;
            // mobile autoplay requirements
            v.muted = true;
            v.autoplay = true;
            v.playsInline = true;
            v.setAttribute("muted", "");
            v.setAttribute("playsinline", "");
            v.setAttribute("webkit-playsinline", "");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(v, {
                opacity: 0
            });
        });
        Object.values(labelRefs.current).forEach((el)=>el && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
                opacity: 0,
                y: 12
            }));
        mobileRefs.current.forEach((el)=>el && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
                y: 120,
                opacity: 0,
                scale: 0.97
            }));
        // reduced-motion: reveal and play immediately
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const root = hostRef.current;
        const pinEl = pinRef.current;
        // entrance timeline
        const entrance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            defaults: {
                ease: "power3.out"
            },
            scrollTrigger: {
                trigger: root,
                start: "top top",
                end: "+=140%",
                scrub: 0.85,
                pin: pinEl,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });
        // desktop cards in order
        const inOrder = CARDS.map((c)=>thumbRefs.current[c.id]).filter(Boolean);
        entrance.to(inOrder, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.0,
            stagger: 0.22
        }, 0.10);
        // fade in each desktop video and start playback
        inOrder.forEach((el, i)=>{
            const id = CARDS[i].id;
            const vid = ()=>videoRefs.current[id];
            const base = 0.10 + i * 0.22;
            entrance.add(()=>{
                const v = vid();
                if (!v) return;
                // make iOS happy
                v.muted = true;
                v.autoplay = true;
                v.playsInline = true;
                v.setAttribute("muted", "");
                v.setAttribute("playsinline", "");
                v.setAttribute("webkit-playsinline", "");
                const p = v.play();
                if (p && typeof p.catch === "function") p.catch(()=>{});
            }, base + 0.55);
            entrance.to(vid(), {
                opacity: 1,
                duration: 0.6,
                ease: "power2.out"
            }, base + 0.55);
            entrance.to(labelRefs.current[id], {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out"
            }, base + 0.65);
        });
        // mobile tiles reveal
        if (mobileRefs.current.length) {
            entrance.to(mobileRefs.current, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.9,
                stagger: 0.12
            }, 0.14);
        }
        // copy entrance
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline().from("[data-anim='headline']", {
            y: 20,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out"
        }, 0).from("[data-anim='subhead']", {
            y: 16,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out"
        }, 0.1).from("[data-anim='cta']", {
            scale: 0.95,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out"
        }, 0.2);
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf("*");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach((st)=>st.kill());
            [
                ...Object.values(videoRefs.current),
                ...Object.values(mobileVideoRefs.current)
            ].forEach((v)=>{
                try {
                    v?.pause();
                } catch  {}
            });
        };
    }, [
        prefersReduced
    ]);
    // IntersectionObserver to nudge mobile videos to play/pause when visible
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const vids = Object.values(mobileVideoRefs.current).filter(Boolean);
        if (!vids.length) return;
        const io = new IntersectionObserver((entries)=>{
            entries.forEach((ent)=>{
                const v = ent.target;
                if (ent.isIntersecting) {
                    // make iOS Safari actually autoplay inline
                    v.muted = true;
                    v.autoplay = true;
                    v.playsInline = true;
                    v.setAttribute("muted", "");
                    v.setAttribute("playsinline", "");
                    v.setAttribute("webkit-playsinline", "");
                    v.play().catch(()=>{});
                } else {
                    try {
                        v.pause();
                    } catch  {}
                }
            });
        }, {
            threshold: 0.35
        });
        vids.forEach((v)=>io.observe(v));
        return ()=>io.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: hostRef,
        className: "relative bg-gradient-to-b from-[#101212] to-[#08201D]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: pinRef,
            className: "relative min-h-[100svh] pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-28 overflow-hidden",
            "aria-label": "Hero",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden lg:block",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto max-w-7xl h-[320px]",
                        children: CARDS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-card": true,
                                className: c.className,
                                ref: (el)=>{
                                    thumbRefs.current[c.id] = el;
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: c.img,
                                            alt: c.alt,
                                            width: 520,
                                            height: 340,
                                            className: "h-full w-full object-cover",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero/HeroStatic.tsx",
                                            lineNumber: 191,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                            ref: (el)=>{
                                                videoRefs.current[c.id] = el;
                                            },
                                            className: "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0",
                                            src: c.video,
                                            muted: true,
                                            autoPlay: true,
                                            playsInline: true,
                                            preload: "metadata",
                                            loop: true,
                                            "aria-label": `${c.alt} video`
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero/HeroStatic.tsx",
                                            lineNumber: 200,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: (el)=>{
                                                labelRefs.current[c.id] = el;
                                            },
                                            className: "pointer-events-none absolute left-3 bottom-3 px-3 py-1.5 rounded-md bg-black/50 ring-1 ring-white/10 text-white text-sm font-semibold opacity-0",
                                            children: c.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero/HeroStatic.tsx",
                                            lineNumber: 211,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero/HeroStatic.tsx",
                                    lineNumber: 189,
                                    columnNumber: 17
                                }, this)
                            }, c.id, false, {
                                fileName: "[project]/components/hero/HeroStatic.tsx",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroStatic.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/hero/HeroStatic.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:hidden absolute inset-x-0 bottom-0 z-10 px-4 pb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: CARDS.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>{
                                    if (el) mobileRefs.current[i] = el;
                                },
                                className: "rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    ref: (el)=>{
                                        mobileVideoRefs.current[c.id] = el;
                                    },
                                    className: "h-28 w-full object-cover",
                                    src: c.video,
                                    poster: c.img,
                                    muted: true,
                                    autoPlay: true,
                                    playsInline: true,
                                    preload: "metadata",
                                    loop: true,
                                    "aria-label": `${c.alt} video`
                                }, void 0, false, {
                                    fileName: "[project]/components/hero/HeroStatic.tsx",
                                    lineNumber: 232,
                                    columnNumber: 17
                                }, this)
                            }, c.id, false, {
                                fileName: "[project]/components/hero/HeroStatic.tsx",
                                lineNumber: 227,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroStatic.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/hero/HeroStatic.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CopyBlock, {
                    zClass: "z-20"
                }, void 0, false, {
                    fileName: "[project]/components/hero/HeroStatic.tsx",
                    lineNumber: 249,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/hero/HeroStatic.tsx",
            lineNumber: 174,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/hero/HeroStatic.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
/* ---- bits ---- */ function CopyBlock({ zClass = "z-20" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${zClass} px-4 mx-auto max-w-7xl sm:px-6 lg:px-8`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    "data-anim": "headline",
                    className: "text-4xl font-bold sm:text-6xl lg:text-7xl leading-tight",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-300",
                        children: "Plan smart. Travel better."
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroStatic.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/hero/HeroStatic.tsx",
                    lineNumber: 261,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    "data-anim": "subhead",
                    className: "mt-6 sm:mt-8 text-base text-white/80 sm:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto",
                    children: "Tailored trips for Indians and NRIs. Real quotes, secure payments, and human help when you need it."
                }, void 0, false, {
                    fileName: "[project]/components/hero/HeroStatic.tsx",
                    lineNumber: 266,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    "data-anim": "cta",
                    href: "#trip-builder",
                    className: "inline-flex items-center px-8 py-4 mt-10 sm:mt-12 lg:mt-16 font-semibold text-white text-lg transition-colors bg-zinc-900 rounded-lg hover:bg-zinc-800 focus:bg-zinc-800",
                    children: [
                        "Start Trip Builder",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6 ml-3 -mr-1",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M13 9l3 3-3 3M5 12h11"
                            }, void 0, false, {
                                fileName: "[project]/components/hero/HeroStatic.tsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/hero/HeroStatic.tsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/hero/HeroStatic.tsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/hero/HeroStatic.tsx",
            lineNumber: 260,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/hero/HeroStatic.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, this);
}
function Frame({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-[220px] w-[360px] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/40 bg-white/5 backdrop-blur-[0.5px] will-change-transform",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/hero/HeroStatic.tsx",
        lineNumber: 286,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/carousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/sections/Carousel.tsx
__turbopack_context__.s([
    "default",
    ()=>Carousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
function Carousel({ id = "destinations", title = "Top Picks", items, darkOverlay = 0.25, overshootPx = 120, whipMs = 720, respectReducedMotion = true }) {
    const scrollerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const centersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gutters, setGutters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        left: 0,
        right: 0
    });
    const [dramatic, setDramatic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [touchStart, setTouchStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [touchEnd, setTouchEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imagesLoaded, setImagesLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    // roulette state
    const [isRouletting, setIsRouletting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rouletteTarget, setRouletteTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const timeoutsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Pills (bottom bar)
    const pillsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pillBtnRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [pillsH, setPillsH] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // dynamic height of pills bar
    const pointerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prefersReduced = respectReducedMotion && "undefined" !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const overlay = Math.max(0, Math.min(1, darkOverlay));
    /* ---------- Measurement ---------- */ const measureAll = ()=>{
        const root = scrollerRef.current;
        if (!root) return;
        const cards = cardRefs.current.filter(Boolean);
        if (!cards.length) return;
        // center-first gutter (assumes equal card width)
        const sample = cards[0];
        const viewport = root.clientWidth;
        const cardW = sample.getBoundingClientRect().width;
        const gutter = Math.max(0, Math.round((viewport - cardW) / 2));
        setGutters({
            left: gutter,
            right: gutter
        });
        // compute card centers in scroll coordinates after padding applies
        requestAnimationFrame(()=>{
            const c = [];
            for (const el of cards)c.push(el.offsetLeft + el.clientWidth / 2);
            centersRef.current = c;
        });
        // measure pills height if (wraps on desktop; changes on resize)
        if (pillsRef.current) setPillsH(pillsRef.current.offsetHeight);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        measureAll();
        const root = scrollerRef.current;
        if (!root) return;
        const ro = new ResizeObserver(measureAll);
        ro.observe(root);
        // observe pills height
        let roPills = null;
        if (pillsRef.current) {
            roPills = new ResizeObserver(()=>{
                if (pillsRef.current) setPillsH(pillsRef.current.offsetHeight);
            });
            roPills.observe(pillsRef.current);
        }
        return ()=>{
            ro.disconnect();
            if (roPills) roPills.disconnect();
            // cleanup any pending roulette timeouts on unmount
            timeoutsRef.current.forEach((id)=>clearTimeout(id));
            timeoutsRef.current = [];
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        items.length
    ]);
    /* ---------- Scroll brain (no per-frame rect reads) ---------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = scrollerRef.current;
        if (!root) return;
        let ticking = false;
        const onScroll = ()=>{
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(()=>{
                ticking = false;
                const cards = cardRefs.current.filter(Boolean);
                if (!cards.length) return;
                const centers = centersRef.current;
                if (!centers.length) return;
                const viewCenter = root.scrollLeft + root.clientWidth / 2;
                let bestIdx = active;
                let bestDelta = Number.POSITIVE_INFINITY;
                const isMobile = "undefined" !== "undefined" && window.innerWidth < 768;
                const baseIntensity = dramatic ? 1.0 : 0.65;
                const blurMax = dramatic ? ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 3 : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1.5;
                for(let i = 0; i < cards.length; i++){
                    const el = cards[i];
                    const delta = centers[i] - viewCenter;
                    const d = Math.abs(delta);
                    if (d < bestDelta) {
                        bestDelta = d;
                        bestIdx = i;
                    }
                    // Skip applying scroll effects during roulette to let CSS styling work
                    if (isRouletting) {
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
                    const img = el.querySelector("[data-img]");
                    if (img) {
                        img.style.filter = `blur(${blur}px) saturate(${0.6 + depth * 0.4}) brightness(${0.8 + depth * 0.2})`;
                    }
                }
                if (bestIdx !== active) setActive(bestIdx);
            });
        };
        root.addEventListener("scroll", onScroll, {
            passive: true
        });
        onScroll();
        return ()=>root.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        dramatic,
        items.length
    ]);
    /* ---------- Programmatic scroll ---------- */ const animateScrollTo = (left, ms)=>{
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
        const easeInOutCubic = (t)=>t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const step = (now)=>{
            const t = Math.min(1, (now - startTime) / duration);
            const node = scrollerRef.current;
            if (!node) return; // stop if unmounted
            node.scrollLeft = start + change * easeInOutCubic(t);
            if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };
    const centerIndex = (idx, ms = 500)=>{
        const root = scrollerRef.current;
        const centers = centersRef.current;
        if (!root || !centers.length) return;
        const clamped = Math.max(0, Math.min(centers.length - 1, idx));
        const targetLeft = centers[clamped] - root.clientWidth / 2;
        animateScrollTo(targetLeft, ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ms);
    };
    const centerPill = (i)=>{
        const bar = pillsRef.current;
        const btn = pillBtnRefs.current[i];
        if (!bar || !btn) return;
        const left = btn.offsetLeft - bar.clientWidth / 2 + btn.clientWidth / 2;
        bar.scrollTo({
            left,
            behavior: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "smooth"
        });
    };
    const whipTo = (idx)=>{
        const root = scrollerRef.current;
        const centers = centersRef.current;
        if (!root || !centers.length) return;
        const clamped = Math.max(0, Math.min(centers.length - 1, idx));
        const baseLeft = centers[clamped] - root.clientWidth / 2;
        const dir = baseLeft > root.scrollLeft ? 1 : -1;
        const overshoot = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : overshootPx * dir;
        setDramatic(true);
        animateScrollTo(baseLeft + overshoot, Math.round(whipMs * 0.6));
        const t1 = window.setTimeout(()=>{
            animateScrollTo(baseLeft, Math.round(whipMs * 0.4));
            const t2 = window.setTimeout(()=>setDramatic(false), Math.round(whipMs * 0.45));
            timeoutsRef.current.push(t2);
        }, Math.round(whipMs * 0.6));
        timeoutsRef.current.push(t1);
        centerPill(clamped);
    };
    // Touch gesture handlers
    const minSwipeDistance = 50;
    const onTouchStart = (e)=>{
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };
    const onTouchMove = (e)=>{
        setTouchEnd(e.targetTouches[0].clientX);
    };
    const onTouchEnd = ()=>{
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
    const handleImageLoad = (imageId)=>{
        setImagesLoaded((prev)=>new Set(prev).add(imageId));
    };
    const clearRouletteTimers = ()=>{
        timeoutsRef.current.forEach((id)=>clearTimeout(id));
        timeoutsRef.current = [];
    };
    const rouletteToDestination = (targetIndex)=>{
        if (isRouletting) return; // Prevent stacking roulettes
        clearRouletteTimers();
        setIsRouletting(true);
        setRouletteTarget(targetIndex);
        const root = scrollerRef.current;
        const centers = centersRef.current;
        if (!root || !centers.length || !pointerRef.current) return;
        // Animate pointer to point right when roulette starts
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(pointerRef.current, {
            rotation: 45,
            duration: 0.5,
            ease: "power2.out"
        });
        const currentIndex = active;
        const totalItems = items.length;
        // Calculate full circle + target position
        const fullCircle = totalItems;
        const extraRotations = Math.floor(Math.random() * 2) + 1; // 1-2 extra rotations
        const totalSteps = fullCircle * extraRotations + (targetIndex - currentIndex + totalItems) % totalItems;
        let currentStep = 0;
        const baseSpeed = 60;
        const rouletteStep = ()=>{
            if (currentStep >= totalSteps) {
                const tFin = window.setTimeout(()=>{
                    setActive(targetIndex);
                    centerIndex(targetIndex, 800);
                    centerPill(targetIndex);
                    // Animate pointer back to pointing down with physics bounce
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(pointerRef.current, {
                        rotation: 0,
                        duration: 1.5,
                        ease: "elastic.out(1, 0.3)",
                        delay: 0.2
                    });
                    const tEnd = window.setTimeout(()=>{
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
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(pointerRef.current, {
                    rotation: 45 + wobbleAmount,
                    duration: Math.min(delay / 1000, 0.3),
                    ease: "power1.out"
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
    const onKeyDown = (e)=>{
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        centerPill(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        active
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        "aria-label": title,
        className: "relative w-full h-[100svh] min-h-[100svh] bg-black text-white",
        style: {
            height: "100svh"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 inset-x-0 z-10 bg-gradient-to-b from-black/50 via-black/20 to-transparent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 lg:pt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-6xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/sections/carousel.tsx",
                                lineNumber: 441,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base text-white/80 mt-1 drop-shadow-md",
                                "aria-live": "polite",
                                children: isRouletting ? "🎲 Selecting destination..." : "Discover your next adventure"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/carousel.tsx",
                                lineNumber: 444,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/carousel.tsx",
                        lineNumber: 440,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/carousel.tsx",
                    lineNumber: 439,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/carousel.tsx",
                lineNumber: 438,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[110px] sm:top-[130px] md:top-[150px] left-1/2 -translate-x-1/2 z-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `transition-transform duration-300 ${isRouletting ? "scale-110" : "scale-100"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: pointerRef,
                                className: "w-0 h-0 drop-shadow-lg text-yellow-400 border-l-[8px] border-r-[8px] border-t-[28px] border-l-transparent border-r-transparent border-t-current",
                                style: {
                                    transformOrigin: "50% 0%"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/sections/carousel.tsx",
                                lineNumber: 465,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full blur-sm bg-yellow-400/40"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/carousel.tsx",
                                lineNumber: 471,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/carousel.tsx",
                        lineNumber: 463,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/carousel.tsx",
                    lineNumber: 458,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/carousel.tsx",
                lineNumber: 457,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollerRef,
                className: "absolute left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 top-[120px] sm:top-[140px] md:top-[160px] overflow-x-auto overflow-y-hidden no-scrollbar overscroll-x-contain snap-x snap-mandatory snap-always flex items-center gap-6 sm:gap-8 focus:outline-none",
                style: {
                    paddingLeft: `${gutters.left}px`,
                    paddingRight: `${gutters.right}px`,
                    bottom: `${Math.max(64, pillsH + 24)}px`
                },
                tabIndex: 0,
                onKeyDown: onKeyDown,
                onTouchStart: onTouchStart,
                onTouchMove: onTouchMove,
                onTouchEnd: onTouchEnd,
                "aria-roledescription": "carousel",
                "aria-label": title,
                children: [
                    items.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: (el)=>{
                                cardRefs.current[i] = el;
                            },
                            className: "relative snap-center shrink-0 transition-transform duration-300 will-change-transform cursor-pointer touch-manipulation",
                            style: {
                                width: "clamp(240px, 70vw, 720px)"
                            },
                            role: "group",
                            "aria-roledescription": "slide",
                            "aria-label": `${p.title} (${i + 1} of ${items.length})`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative aspect-[10/16] md:aspect-[16/9] w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-black/50 group transition-all duration-500 ${i === active ? "ring-4 ring-white/90 ring-offset-4 ring-offset-black scale-105" : "ring-1 ring-white/20"}`,
                                style: isRouletting && i === active ? {
                                    // Force selection styling during roulette
                                    transform: "scale(1.05)",
                                    filter: "brightness(1.1) saturate(1.1)",
                                    zIndex: 10
                                } : {},
                                children: [
                                    isRouletting && i === active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -inset-1 rounded-3xl ring-4 ring-white/90 ring-offset-4 ring-offset-black pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/carousel.tsx",
                                        lineNumber: 525,
                                        columnNumber: 17
                                    }, this),
                                    i === active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute -inset-2 rounded-3xl bg-[radial-gradient(closest-side,rgba(255,255,255,0.30),rgba(255,255,255,0.10),transparent)] animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/carousel.tsx",
                                                lineNumber: 531,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute -inset-4 rounded-3xl bg-[radial-gradient(closest-side,rgba(255,255,255,0.20),rgba(255,255,255,0.05),transparent)] animate-pulse",
                                                style: {
                                                    animationDelay: "0.5s"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/carousel.tsx",
                                                lineNumber: 532,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    !imagesLoaded.has(p.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 animate-pulse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/carousel.tsx",
                                                lineNumber: 542,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-4 left-4 right-4 space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-6 bg-white/20 rounded-lg animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/carousel.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-4 bg-white/10 rounded w-2/3 animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/carousel.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/carousel.tsx",
                                                lineNumber: 543,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/carousel.tsx",
                                        lineNumber: 541,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        "data-img": true,
                                        src: p.image,
                                        alt: p.alt || p.title,
                                        fill: true,
                                        sizes: "(min-width: 1024px) 60vw, (min-width: 640px) 70vw, 80vw",
                                        className: `object-cover object-center transition-[filter,transform,opacity] duration-500 group-hover:scale-105 ${imagesLoaded.has(p.id) ? "opacity-100" : "opacity-0"}`,
                                        priority: i === 0,
                                        onLoad: ()=>handleImageLoad(p.id)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/carousel.tsx",
                                        lineNumber: 550,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black",
                                        style: {
                                            opacity: overlay
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/carousel.tsx",
                                        lineNumber: 563,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/carousel.tsx",
                                        lineNumber: 564,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/carousel.tsx",
                                        lineNumber: 565,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 p-4 sm:p-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-lg",
                                                    children: p.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/carousel.tsx",
                                                    lineNumber: 570,
                                                    columnNumber: 19
                                                }, this),
                                                p.subtitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm sm:text-lg text-white/90 drop-shadow-md font-medium",
                                                    children: p.subtitle
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/carousel.tsx",
                                                    lineNumber: 575,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm sm:text-base text-white/75 drop-shadow-md",
                                                    children: "Discover amazing destinations"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/carousel.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/30 transition-all duration-200 border border-white/30",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Explore"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/carousel.tsx",
                                                                lineNumber: 586,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M9 5l7 7-7 7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/carousel.tsx",
                                                                    lineNumber: 593,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/carousel.tsx",
                                                                lineNumber: 587,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sections/carousel.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/carousel.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/carousel.tsx",
                                            lineNumber: 569,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/carousel.tsx",
                                        lineNumber: 568,
                                        columnNumber: 15
                                    }, this),
                                    isRouletting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:hidden absolute inset-0 rounded-3xl overflow-hidden pointer-events-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-radial from-yellow-400/30 via-red-400/20 to-transparent animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/carousel.tsx",
                                                        lineNumber: 610,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-2 bg-gradient-radial from-transparent via-white/10 to-transparent animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/carousel.tsx",
                                                        lineNumber: 611,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/carousel.tsx",
                                                lineNumber: 609,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:hidden absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-400 via-yellow-400 to-red-400 animate-spin opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/carousel.tsx",
                                                lineNumber: 614,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    i === 0 && !isRouletting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:hidden absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs text-white/90 pointer-events-none border border-white/20 animate-bounce",
                                        children: "Swipe →"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/carousel.tsx",
                                        lineNumber: 620,
                                        columnNumber: 17
                                    }, this),
                                    i === active && !isRouletting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/carousel.tsx",
                                        lineNumber: 627,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/carousel.tsx",
                                lineNumber: 506,
                                columnNumber: 13
                            }, this)
                        }, p.id, false, {
                            fileName: "[project]/components/sections/carousel.tsx",
                            lineNumber: 494,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shrink-0 w-[1px]",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/components/sections/carousel.tsx",
                        lineNumber: 633,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/carousel.tsx",
                lineNumber: 477,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-3 inset-x-0 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none md:hidden absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-black via-black/70 to-transparent z-10"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/carousel.tsx",
                                lineNumber: 641,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none md:hidden absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-black via-black/70 to-transparent z-10"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/carousel.tsx",
                                lineNumber: 642,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: pillsRef,
                                role: "tablist",
                                "aria-label": "Destinations filter",
                                className: " flex flex-nowrap items-center gap-2 overflow-x-auto no-scrollbar py-1 snap-x snap-mandatory md:flex-wrap md:overflow-visible md:snap-none md:justify-center ",
                                children: items.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        ref: (el)=>{
                                            pillBtnRefs.current[i] = el;
                                        },
                                        onClick: ()=>rouletteToDestination(i),
                                        role: "tab",
                                        "aria-selected": i === active,
                                        "aria-controls": `${id}-slide-${i}`,
                                        disabled: isRouletting,
                                        className: ` relative snap-center whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 backdrop-blur-sm min-w-[80px] text-center hover:scale-105 active:scale-95 touch-manipulation ${isRouletting ? "opacity-75" : ""} ${i === rouletteTarget && isRouletting ? "border-yellow-400 text-yellow-300 bg-yellow-400/20 shadow-lg shadow-yellow-400/50 scale-110" : i === active ? "border-white/80 text-white bg-white/15 md:bg-white md:text-black md:border-white md:shadow-lg shadow-white/25 scale-105" : "border-white/30 text-white/90 hover:bg-white/10 hover:border-white/50 shadow-lg shadow-black/25"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block translate-y-[0.5px] tracking-wide",
                                            children: p.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/carousel.tsx",
                                            lineNumber: 671,
                                            columnNumber: 19
                                        }, this)
                                    }, p.id, false, {
                                        fileName: "[project]/components/sections/carousel.tsx",
                                        lineNumber: 651,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/carousel.tsx",
                                lineNumber: 644,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/carousel.tsx",
                        lineNumber: 639,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/carousel.tsx",
                    lineNumber: 638,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/carousel.tsx",
                lineNumber: 637,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/carousel.tsx",
        lineNumber: 431,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteFooterMonochrome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function SiteFooterMonochrome() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        "aria-labelledby": "footer-heading",
        className: "jsx-ea4b551c4b536391" + " " + "relative isolate bg-black text-zinc-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "jsx-ea4b551c4b536391" + " " + "pointer-events-none absolute inset-0 [background:radial-gradient(1200px_500px_at_20%_-10%,rgba(255,255,255,0.08)_0%,transparent_60%)]"
            }, void 0, false, {
                fileName: "[project]/components/sections/footer.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "jsx-ea4b551c4b536391" + " " + "absolute inset-x-0 top-1/2 -z-10 h-24 -translate-y-1/2 transform-gpu",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-ea4b551c4b536391" + " " + "glowbar mx-auto h-full w-[140%]"
                }, void 0, false, {
                    fileName: "[project]/components/sections/footer.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/footer.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ea4b551c4b536391" + " " + "mx-auto max-w-7xl px-6 pt-14 pb-10 md:pt-18 md:pb-12 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ea4b551c4b536391" + " " + "mb-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/footer.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ea4b551c4b536391" + " " + "grid grid-cols-1 gap-10 md:grid-cols-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ea4b551c4b536391" + " " + "md:col-span-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ea4b551c4b536391" + " " + "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-ea4b551c4b536391" + " " + "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xs tracking-widest text-white/80",
                                                children: "LW"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/footer.tsx",
                                                lineNumber: 36,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-ea4b551c4b536391" + " " + "text-sm font-medium tracking-wide text-white/80",
                                                children: "LeafWay Solutions"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/footer.tsx",
                                                lineNumber: 39,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/footer.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-ea4b551c4b536391" + " " + "mt-4 max-w-sm text-sm leading-relaxed text-zinc-300",
                                        children: "Understated travel, engineered properly. Planning that respects your attention span and your calendar."
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/footer.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: (e)=>e.preventDefault(),
                                        className: "jsx-ea4b551c4b536391" + " " + "mt-5 flex w-full flex-col gap-3 sm:flex-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "f-email",
                                                className: "jsx-ea4b551c4b536391" + " " + "sr-only",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/footer.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "f-email",
                                                name: "email",
                                                type: "email",
                                                required: true,
                                                placeholder: "you@example.com",
                                                autoComplete: "email",
                                                className: "jsx-ea4b551c4b536391" + " " + "h-10 w-full rounded-full border border-white/10 bg-zinc-900/60 px-4 text-sm text-white/90 outline-none placeholder:text-white/40 focus:border-white/30 sm:flex-1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/footer.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "jsx-ea4b551c4b536391" + " " + "h-10 shrink-0 rounded-full bg-white px-5 text-sm font-medium text-zinc-950 shadow-sm transition active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
                                                children: "Subscribe"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/footer.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/footer.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-ea4b551c4b536391" + " " + "mt-2 text-xs text-white/40",
                                        children: "Monthly. Useful. One-tap unsubscribe."
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/footer.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ea4b551c4b536391" + " " + "mt-6 flex flex-wrap gap-2",
                                        children: [
                                            {
                                                label: "Instagram",
                                                href: "#instagram"
                                            },
                                            {
                                                label: "LinkedIn",
                                                href: "#linkedin"
                                            },
                                            {
                                                label: "YouTube",
                                                href: "#youtube"
                                            }
                                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: s.href,
                                                className: "inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/40",
                                                children: s.label.toUpperCase()
                                            }, s.label, false, {
                                                fileName: "[project]/components/sections/footer.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/footer.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/footer.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ea4b551c4b536391" + " " + "md:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        "aria-labelledby": "prod-col",
                                        className: "jsx-ea4b551c4b536391" + " " + "text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                id: "prod-col",
                                                className: "jsx-ea4b551c4b536391" + " " + "mb-3 text-xs font-semibold uppercase tracking-widest text-white/60",
                                                children: "Product"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/footer.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-ea4b551c4b536391" + " " + "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-ea4b551c4b536391",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "#trip-builder",
                                                            className: "text-white/80 transition hover:text-white",
                                                            children: "Trip Builder Lite"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/footer.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/footer.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-ea4b551c4b536391",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "#how-it-works",
                                                            className: "text-white/80 transition hover:text-white",
                                                            children: "How It Works"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/footer.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/footer.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-ea4b551c4b536391",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "#travel-search",
                                                            className: "text-white/80 transition hover:text-white",
                                                            children: "Travel Search"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/footer.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/footer.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-ea4b551c4b536391",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "#invoice",
                                                            className: "text-white/80 transition hover:text-white",
                                                            children: "Have an Invoice?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/footer.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/footer.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/footer.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/footer.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        "aria-labelledby": "explore-col",
                                        className: "jsx-ea4b551c4b536391" + " " + "text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                id: "explore-col",
                                                className: "jsx-ea4b551c4b536391" + " " + "mb-3 text-xs font-semibold uppercase tracking-widest text-white/60",
                                                children: "Explore"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/footer.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-ea4b551c4b536391" + " " + "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-ea4b551c4b536391",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "#activities",
                                                            className: "text-white/80 transition hover:text-white",
                                                            children: "Activities Library"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/footer.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/footer.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-ea4b551c4b536391",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "#explorer",
                                                            className: "text-white/80 transition hover:text-white",
                                                            children: "Continent Explorer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/footer.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/footer.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/footer.tsx",
                                                lineNumber: 131,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/footer.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        "aria-labelledby": "company-col",
                                        className: "jsx-ea4b551c4b536391" + " " + "text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                id: "company-col",
                                                className: "jsx-ea4b551c4b536391" + " " + "mb-3 text-xs font-semibold uppercase tracking-widest text-white/60",
                                                children: "Company"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/footer.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-ea4b551c4b536391" + " " + "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-ea4b551c4b536391",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "#about",
                                                            className: "text-white/80 transition hover:text-white",
                                                            children: "About"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/footer.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/footer.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-ea4b551c4b536391",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "#careers",
                                                            className: "text-white/80 transition hover:text-white",
                                                            children: "Careers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/footer.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/footer.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-ea4b551c4b536391",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "#press",
                                                            className: "text-white/80 transition hover:text-white",
                                                            children: "Press"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/footer.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/footer.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/footer.tsx",
                                                lineNumber: 152,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/footer.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        "aria-labelledby": "support-col",
                                        className: "jsx-ea4b551c4b536391" + " " + "text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                id: "support-col",
                                                className: "jsx-ea4b551c4b536391" + " " + "mb-3 text-xs font-semibold uppercase tracking-widest text-white/60",
                                                children: "Support"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/footer.tsx",
                                                lineNumber: 172,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-ea4b551c4b536391" + " " + "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-ea4b551c4b536391",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "mailto:team@example.com",
                                                            className: "jsx-ea4b551c4b536391" + " " + "text-white/80 transition hover:text-white",
                                                            children: "Email the Team"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/footer.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/footer.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-ea4b551c4b536391",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "#whatsapp",
                                                            className: "text-white/80 transition hover:text-white",
                                                            children: "WhatsApp Concierge"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/footer.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/footer.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-ea4b551c4b536391",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "#support",
                                                            className: "text-white/80 transition hover:text-white",
                                                            children: "Call Support"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/footer.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/footer.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/footer.tsx",
                                                lineNumber: 178,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/footer.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/footer.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/footer.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ea4b551c4b536391" + " " + "mt-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ea4b551c4b536391" + " " + "h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/footer.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ea4b551c4b536391" + " " + "flex flex-col items-start justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        id: "footer-heading",
                                        className: "jsx-ea4b551c4b536391",
                                        children: "© 2025 LeafWay Solutions. Crafted with care."
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/footer.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "jsx-ea4b551c4b536391" + " " + "flex flex-wrap items-center gap-x-6 gap-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-ea4b551c4b536391",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#privacy",
                                                    className: "transition hover:text-white",
                                                    children: "Privacy"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/footer.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/footer.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-ea4b551c4b536391",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#terms",
                                                    className: "transition hover:text-white",
                                                    children: "Terms"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/footer.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/footer.tsx",
                                                lineNumber: 213,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-ea4b551c4b536391",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#accessibility",
                                                    className: "transition hover:text-white",
                                                    children: "Accessibility"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/footer.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/footer.tsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-ea4b551c4b536391",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#sitemap",
                                                    className: "transition hover:text-white",
                                                    children: "Sitemap"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/footer.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/footer.tsx",
                                                lineNumber: 223,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/footer.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/footer.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/footer.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/footer.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "ea4b551c4b536391",
                children: ".glowbar.jsx-ea4b551c4b536391{filter:blur(40px);opacity:.55;mix-blend-mode:normal;background:linear-gradient(90deg,#94949400 0%,#9494941f 18%,#94949447 50%,#9494941f 82%,#94949400 100%) 0 0/320% 100% no-repeat;width:100%;height:180px;animation:9s linear infinite glow-pan}@keyframes glow-pan{0%{background-position:-60% 0}to{background-position:160% 0}}@media (prefers-reduced-motion:reduce){.glowbar.jsx-ea4b551c4b536391{opacity:.35;animation:none}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/footer.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/invoice/InvoiceQuickPay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InvoiceQuickPay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
/* ---------------- Config ---------------- */ const REF_REGEX = /\bINV-[A-Z0-9]{5,10}\b/;
const FETCH_LATENCY_MS = 650;
const MOCK = {
    "INV-AX7Q9K": {
        id: "INV-AX7Q9K",
        dateISO: "2025-09-18",
        amount: 2499,
        currency: "AED",
        billTo: "Naeem Ali",
        status: "unpaid"
    },
    "INV-Z9M2Q1": {
        id: "INV-Z9M2Q1",
        dateISO: "2025-08-31",
        amount: 139900,
        currency: "INR",
        billTo: "Leafway Corporate",
        status: "unpaid"
    }
};
async function lookupInvoice(ref) {
    await new Promise((r)=>setTimeout(r, FETCH_LATENCY_MS));
    return MOCK[ref] ?? null;
}
function isUserInUAE() {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone === "Asia/Dubai";
    } catch  {
        return false;
    }
}
function money(n, ccy) {
    try {
        return new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: ccy
        }).format(n);
    } catch  {
        return `${ccy} ${n.toLocaleString()}`;
    }
}
function seedFrom(str) {
    let h = 2166136261 >>> 0;
    for(let i = 0; i < str.length; i++)h = (h ^ str.charCodeAt(i)) * 16777619;
    return h >>> 0;
}
function prng(seed) {
    let x = seed >>> 0;
    return ()=>{
        x = x * 1664525 + 1013904223 >>> 0;
        return x / 2 ** 32;
    };
}
function buildBars(seedStr, rows = 12) {
    const rnd = prng(seedFrom(seedStr || "INV-XXXX"));
    const bars = [];
    for(let i = 0; i < rows; i++){
        const isDouble = rnd() > 0.55; // some doubles
        const gapTop = 2 + Math.floor(rnd() * 6); // 2–7px
        if (isDouble) {
            const h1 = 2 + Math.floor(rnd() * 3); // 2–4px
            const h2 = 2 + Math.floor(rnd() * 3);
            const innerGap = 2 + Math.floor(rnd() * 3); // 2–4px
            bars.push({
                kind: "double",
                h1,
                h2,
                innerGap,
                gapTop
            });
        } else {
            const h = 3 + Math.floor(rnd() * 4); // 3–6px
            bars.push({
                kind: "single",
                h,
                gapTop
            });
        }
    }
    return bars;
}
function InvoiceQuickPay() {
    const [refInput, setRefInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [invoice, setInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [drawer, setDrawer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const aeUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>isUserInUAE(), []);
    const reduced = useReducedMotion();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const debouncer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* Prefill from URL or hash */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const sp = new URLSearchParams(location.search);
            const q = sp.get("ref") || location.hash.replace(/^#/, "");
            const m = (q || "").toUpperCase().match(REF_REGEX);
            if (m) {
                setRefInput(m[0]);
                goFetch(m[0]);
            }
        } catch  {}
    }, []);
    /* Paste anywhere → capture ref */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onPaste = (e)=>{
            const t = e.clipboardData?.getData("text") || "";
            const m = t.toUpperCase().match(REF_REGEX);
            if (!m) return;
            e.preventDefault();
            setRefInput(m[0]);
            toast("Invoice reference detected");
            goFetch(m[0]);
        };
        document.addEventListener("paste", onPaste);
        return ()=>document.removeEventListener("paste", onPaste);
    }, []);
    function toast(t) {
        setMsg(t);
        window.setTimeout(()=>setMsg(null), 1600);
    }
    function onChangeRef(raw) {
        const up = raw.toUpperCase().replace(/[^A-Z0-9-]/g, "");
        let val = up.startsWith("INV-") ? up : "INV-" + up.replace(/^INV-?/, "").replace(/^INV/, "");
        setRefInput(val);
        setStatus("validating");
        setStep(1);
        if (debouncer.current) window.clearTimeout(debouncer.current);
        debouncer.current = window.setTimeout(()=>goFetch(val), 300);
    }
    async function goFetch(val) {
        if (!REF_REGEX.test(val)) {
            setStatus("idle");
            setInvoice(null);
            setStep(1);
            return;
        }
        setStatus("fetching");
        setInvoice(null);
        setStep(2);
        try {
            const data = await lookupInvoice(val);
            if (!data) {
                setStatus("notfound");
                setInvoice(null);
                setStep(1);
                return;
            }
            setInvoice(data);
            setStatus("found");
            setStep(2);
        } catch  {
            setStatus("error");
            setStep(1);
        }
    }
    function openDrawer() {
        if (!invoice) return;
        setDrawer(true);
        setStep(3);
    }
    function closeDrawer() {
        setDrawer(false);
        setStep(invoice ? 2 : 1);
    }
    function beginRazorpay() {
        if (!invoice) return;
        if (!aeUser) return toast("Payments available in UAE only for now.");
        if (!window.Razorpay) return toast("Razorpay will be wired soon.");
    }
    const canPay = invoice && invoice.status === "unpaid";
    // Build a stable pattern for the barcode from the reference or input
    const barcodeBars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildBars(invoice?.id || refInput || "INV-XXXX", 18), [
        invoice?.id,
        refInput
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-label": "Have an invoice",
        className: "jsx-7e19f766a893d43f" + " " + "relative overflow-x-hidden bg-zinc-950 text-zinc-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "jsx-7e19f766a893d43f" + " " + "pointer-events-none absolute inset-0 [background:radial-gradient(900px_380px_at_50%_-10%,rgba(255,255,255,.07)_0%,transparent_60%)]"
            }, void 0, false, {
                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-7e19f766a893d43f" + " " + "relative mx-auto max-w-5xl px-4 md:px-8 py-14 md:py-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StepperDark, {
                        step: step
                    }, void 0, false, {
                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "jsx-7e19f766a893d43f" + " " + "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-7e19f766a893d43f" + " " + "text-[32px] md:text-[44px] font-semibold tracking-tight",
                                children: "Have an Invoice?"
                            }, void 0, false, {
                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-7e19f766a893d43f" + " " + "mt-2 text-zinc-400",
                                children: "Paste or type your reference to review details and continue to payment."
                            }, void 0, false, {
                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7e19f766a893d43f" + " " + "relative mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7e19f766a893d43f" + " " + "absolute inset-x-0 -top-8 -z-10 h-32",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7e19f766a893d43f" + " " + "glowbar mx-auto h-32 w-[120%] sm:w-[135%]"
                                }, void 0, false, {
                                    fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7e19f766a893d43f" + " " + "rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02))] backdrop-blur-md shadow-[0_30px_110px_-30px_rgba(0,0,0,.8)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7e19f766a893d43f" + " " + "grid grid-cols-[112px_1fr]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                                className: "jsx-7e19f766a893d43f" + " " + "relative rounded-l-3xl bg-[radial-gradient(120px_60px_at_30%_25%,rgba(255,255,255,.08),transparent_60%),radial-gradient(140px_70px_at_70%_75%,rgba(255,255,255,.08),transparent_60%)] p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7e19f766a893d43f" + " " + "text-[10px] font-semibold tracking-[0.2em] text-zinc-400",
                                                        children: "REF"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7e19f766a893d43f" + " " + "mt-2 text-xs text-zinc-200",
                                                        children: invoice?.id || refInput || "INV-XXXXX"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "aria-label": "barcode",
                                                        className: "jsx-7e19f766a893d43f" + " " + "mt-4 mx-auto h-28 w-12 overflow-hidden rounded bg-zinc-900/60 px-1.5 py-2 flex flex-col",
                                                        children: barcodeBars.map((b, i)=>b.kind === "single" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    marginTop: b.gapTop
                                                                },
                                                                className: "jsx-7e19f766a893d43f",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        height: b.h,
                                                                        background: "rgba(255,255,255,0.88)"
                                                                    },
                                                                    className: "jsx-7e19f766a893d43f" + " " + "w-full rounded-[1px]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, i, false, {
                                                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 23
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    marginTop: b.gapTop
                                                                },
                                                                className: "jsx-7e19f766a893d43f",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            height: b.h1,
                                                                            background: "rgba(255,255,255,0.88)"
                                                                        },
                                                                        className: "jsx-7e19f766a893d43f" + " " + "w-full rounded-[1px]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                        lineNumber: 257,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            height: b.innerGap
                                                                        },
                                                                        className: "jsx-7e19f766a893d43f"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                        lineNumber: 261,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            height: b.h2,
                                                                            background: "rgba(255,255,255,0.88)"
                                                                        },
                                                                        className: "jsx-7e19f766a893d43f" + " " + "w-full rounded-[1px]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                        lineNumber: 262,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7e19f766a893d43f" + " " + "absolute right-0 top-3 bottom-3 w-px bg-zinc-400/40 [mask:repeating-linear-gradient(0deg,#000_0_8px,transparent_8px_16px)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                lineNumber: 238,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7e19f766a893d43f" + " " + "p-5 md:p-7",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7e19f766a893d43f" + " " + "flex items-start justify-between gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7e19f766a893d43f",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-7e19f766a893d43f" + " " + "text-[10px] font-semibold tracking-[0.18em] text-zinc-400",
                                                                        children: "INVOICE"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                        lineNumber: 279,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-7e19f766a893d43f" + " " + "mt-2 flex flex-wrap items-center gap-3 text-sm text-zinc-300",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Meta, {
                                                                                label: "Date",
                                                                                value: invoice ? fmtDate(invoice.dateISO) : "— —"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                                lineNumber: 281,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-7e19f766a893d43f" + " " + "h-3 w-px bg-white/10"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                                lineNumber: 282,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Meta, {
                                                                                label: "Bill to",
                                                                                value: invoice?.billTo || "— —"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                                lineNumber: 283,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                        lineNumber: 280,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7e19f766a893d43f" + " " + "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-7e19f766a893d43f" + " " + "text-[11px] text-zinc-400",
                                                                        children: "Amount"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                        lineNumber: 288,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-7e19f766a893d43f" + " " + "mt-1 text-2xl font-semibold tracking-tight text-white",
                                                                        children: invoice ? money(invoice.amount, invoice.currency) : "— —"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                        lineNumber: 289,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-7e19f766a893d43f" + " " + "mt-2 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-zinc-300",
                                                                        children: invoice?.status ? capitalize(invoice.status) : "Preview"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                        lineNumber: 292,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7e19f766a893d43f" + " " + "my-5 h-px bg-zinc-500/50 [mask:repeating-linear-gradient(90deg,#000_0_10px,transparent_10px_18px)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7e19f766a893d43f" + " " + "flex flex-col gap-3 md:flex-row md:items-center md:gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7e19f766a893d43f" + " " + "inline-flex items-center gap-2 text-sm text-zinc-400",
                                                                children: [
                                                                    "Pay using reference",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7e19f766a893d43f" + " " + "rounded-md bg-white/5 px-1.5 py-0.5 font-mono text-[12px] text-zinc-200",
                                                                        children: invoice?.id || refInput || "INV-XXXXX"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                        lineNumber: 304,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                lineNumber: 302,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7e19f766a893d43f" + " " + "flex-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                lineNumber: 309,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7e19f766a893d43f" + " " + "flex w-full gap-3 md:w-auto",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "invref",
                                                                        className: "jsx-7e19f766a893d43f" + " " + "sr-only",
                                                                        children: "Invoice reference"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                        lineNumber: 312,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-7e19f766a893d43f" + " " + "relative w-full md:w-80",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-7e19f766a893d43f" + " " + "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-zinc-300",
                                                                                children: "INV"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                                lineNumber: 316,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                id: "invref",
                                                                                ref: inputRef,
                                                                                inputMode: "text",
                                                                                autoComplete: "off",
                                                                                spellCheck: false,
                                                                                value: refInput,
                                                                                onChange: (e)=>onChangeRef(e.target.value),
                                                                                placeholder: "INV-AX7Q9K",
                                                                                className: "jsx-7e19f766a893d43f" + " " + "h-10 w-full rounded-full border border-white/10 bg-zinc-900/70 pl-14 pr-4 text-sm tracking-wider text-white placeholder:text-zinc-500 outline-none focus:border-white/30"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                                lineNumber: 319,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                        lineNumber: 315,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: openDrawer,
                                                                        disabled: !invoice || status !== "found",
                                                                        className: "jsx-7e19f766a893d43f" + " " + "h-10 whitespace-nowrap rounded-full bg-white/90 px-4 text-sm font-medium text-zinc-950 shadow-sm transition active:translate-y-px disabled:cursor-not-allowed disabled:opacity-30",
                                                                        children: "Review →"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                        lineNumber: 332,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                lineNumber: 311,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                lineNumber: 276,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "aria-hidden": !drawer,
                                        className: "jsx-7e19f766a893d43f" + " " + ([
                                            "overflow-hidden rounded-b-3xl border-t border-white/10 bg-zinc-900/50 backdrop-blur",
                                            drawer ? "max-h-[500px]" : "max-h-0",
                                            reduced ? "transition-[max-height] duration-200" : "transition-[max-height] duration-400"
                                        ].join(" ") || ""),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7e19f766a893d43f" + " " + "p-6 md:p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7e19f766a893d43f" + " " + "flex items-start justify-between gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-7e19f766a893d43f",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-7e19f766a893d43f" + " " + "text-xs text-zinc-400",
                                                                    children: "Paying"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                    lineNumber: 365,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-7e19f766a893d43f" + " " + "text-lg font-medium tracking-wide",
                                                                    children: [
                                                                        invoice?.id,
                                                                        " · ",
                                                                        invoice ? money(invoice.amount, invoice.currency) : ""
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                    lineNumber: 366,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-7e19f766a893d43f" + " " + "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BadgeDark, {
                                                                    children: "Test mode"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                    lineNumber: 371,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: closeDrawer,
                                                                    className: "jsx-7e19f766a893d43f" + " " + "rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 hover:bg-white/10",
                                                                    children: "Close"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                    lineNumber: 372,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7e19f766a893d43f" + " " + "mt-5 grid gap-4 md:grid-cols-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCardDark, {
                                                            title: "Status",
                                                            value: invoice?.status === "unpaid" ? "Unpaid" : invoice?.status || "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                            lineNumber: 383,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCardDark, {
                                                            title: "Billed to",
                                                            value: invoice?.billTo || "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                            lineNumber: 387,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCardDark, {
                                                            title: "Date",
                                                            value: invoice ? fmtDate(invoice.dateISO) : "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7e19f766a893d43f" + " " + "mt-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MethodsRowDark, {}, void 0, false, {
                                                            fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-7e19f766a893d43f" + " " + "flex gap-3",
                                                            children: canPay && aeUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: beginRazorpay,
                                                                className: "jsx-7e19f766a893d43f" + " " + "rounded-full bg-white text-zinc-950 px-5 py-2.5 text-sm font-medium shadow-sm hover:brightness-95",
                                                                children: "Pay with Razorpay"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                lineNumber: 395,
                                                                columnNumber: 23
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>toast(aeUser ? "Invoice not ready." : "Outside UAE: request link."),
                                                                className: "jsx-7e19f766a893d43f" + " " + "rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/10",
                                                                children: "Request Payment Link"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                            lineNumber: 362,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "status",
                                "aria-live": "polite",
                                className: "jsx-7e19f766a893d43f" + " " + ([
                                    "pointer-events-none fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full bg-black/80 px-3 py-1.5 text-xs text-white shadow",
                                    msg ? "opacity-100" : "opacity-0",
                                    "transition-opacity duration-200"
                                ].join(" ") || ""),
                                children: msg
                            }, void 0, false, {
                                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                                lineNumber: 418,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "7e19f766a893d43f",
                children: ".glowbar.jsx-7e19f766a893d43f{filter:blur(32px);opacity:.95;mix-blend-mode:screen;background:linear-gradient(90deg,#fff0 0%,#ffffff38 18%,#ffffff8c 50%,#ffffff38 82%,#fff0 100%) 0 0/320% 100% no-repeat;width:100%;height:170px;animation:9s linear infinite glow-pan}@keyframes glow-pan{0%{background-position:-60% 0}to{background-position:160% 0}}@media (prefers-reduced-motion:reduce){.glowbar.jsx-7e19f766a893d43f{opacity:.4;animation:none}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
/* --------- Presentational bits ---------- */ function Meta({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-zinc-300",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                lineNumber: 475,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-zinc-100",
                children: value
            }, void 0, false, {
                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                lineNumber: 476,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
        lineNumber: 474,
        columnNumber: 5
    }, this);
}
function StatusDark({ status }) {
    if (status === "fetching") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-3 w-32 animate-pulse rounded bg-white/10"
                }, void 0, false, {
                    fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                    lineNumber: 489,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-3 w-16 animate-pulse rounded bg-white/10"
                }, void 0, false, {
                    fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                    lineNumber: 490,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
            lineNumber: 488,
            columnNumber: 7
        }, this);
    }
    if (status === "notfound") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-sm text-rose-400/90",
        children: "No invoice with that reference."
    }, void 0, false, {
        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
        lineNumber: 494,
        columnNumber: 37
    }, this);
    if (status === "error") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-sm text-rose-400/90",
        children: "Something broke. Try again."
    }, void 0, false, {
        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
        lineNumber: 495,
        columnNumber: 34
    }, this);
    if (status === "found") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-sm text-emerald-300/90",
        children: "Invoice found."
    }, void 0, false, {
        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
        lineNumber: 496,
        columnNumber: 34
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-hidden": true,
        className: "text-sm text-zinc-500",
        children: " "
    }, void 0, false, {
        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
        lineNumber: 497,
        columnNumber: 10
    }, this);
}
function StepperDark({ step }) {
    const items = [
        {
            id: 1,
            label: "Reference"
        },
        {
            id: 2,
            label: "Review"
        },
        {
            id: 3,
            label: "Pay"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto mb-5 flex max-w-md items-center justify-center gap-5 text-xs",
        children: items.map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: [
                            "grid h-5 w-5 place-items-center rounded-full border text-[10px]",
                            step >= it.id ? "border-white bg-white text-zinc-900" : "border-white/20 bg-white/5 text-zinc-400"
                        ].join(" "),
                        "aria-current": step === it.id ? "step" : undefined,
                        children: it.id
                    }, void 0, false, {
                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                        lineNumber: 510,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: step >= it.id ? "text-zinc-200" : "text-zinc-500",
                        children: it.label
                    }, void 0, false, {
                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                        lineNumber: 519,
                        columnNumber: 11
                    }, this),
                    i < items.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "mx-1 block h-px w-6 bg-white/15"
                    }, void 0, false, {
                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                        lineNumber: 520,
                        columnNumber: 36
                    }, this)
                ]
            }, it.id, true, {
                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                lineNumber: 509,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
        lineNumber: 507,
        columnNumber: 5
    }, this);
}
function BadgeDark({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-zinc-200",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
        lineNumber: 529,
        columnNumber: 5
    }, this);
}
function InfoCardDark({ title, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border border-white/10 bg-white/5 p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] text-zinc-400",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                lineNumber: 538,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm font-medium text-zinc-100",
                children: value
            }, void 0, false, {
                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                lineNumber: 539,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
        lineNumber: 537,
        columnNumber: 5
    }, this);
}
function MethodsRowDark() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 text-xs text-zinc-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-zinc-500",
                children: "Methods:"
            }, void 0, false, {
                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                lineNumber: 547,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "inline-flex h-6 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-[10px] text-zinc-200",
                children: "UPI"
            }, void 0, false, {
                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                lineNumber: 548,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "36",
                height: "24",
                viewBox: "0 0 36 24",
                className: "rounded-md border border-white/10 bg-white/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "1",
                        y: "1",
                        width: "34",
                        height: "22",
                        rx: "3",
                        fill: "rgba(255,255,255,0.05)"
                    }, void 0, false, {
                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                        lineNumber: 552,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "6",
                        y: "7",
                        width: "24",
                        height: "10",
                        rx: "2",
                        fill: "rgba(255,255,255,0.2)"
                    }, void 0, false, {
                        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                        lineNumber: 553,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                lineNumber: 551,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "inline-flex h-6 items-center justify-center rounded-md border border-white/10 bg-white/5 px-2 text-[10px] text-zinc-200",
                children: "NetBanking"
            }, void 0, false, {
                fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
                lineNumber: 555,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/invoice/InvoiceQuickPay.tsx",
        lineNumber: 546,
        columnNumber: 5
    }, this);
}
/* ------------- Utilities --------------- */ function useReducedMotion() {
    const [prefers, setPrefers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const m = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = ()=>setPrefers(m.matches);
        update();
        m.addEventListener?.("change", update);
        return ()=>m.removeEventListener?.("change", update);
    }, []);
    return prefers;
}
function fmtDate(iso) {
    try {
        const d = new Date(iso + "T00:00:00Z");
        return new Intl.DateTimeFormat(undefined, {
            year: "numeric",
            month: "short",
            day: "2-digit"
        }).format(d);
    } catch  {
        return iso;
    }
}
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
}),
"[project]/components/how-it-works/DigitalDockingDivs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/how-it-works/DigitalDockingDivs.tsx
__turbopack_context__.s([
    "default",
    ()=>DigitalDockingDivs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const DEFAULT_STEPS = [
    {
        id: "plan",
        title: "Plan Precisely",
        body: "Share goals, constraints, and rough dates. We map feasibility in 24–48h."
    },
    {
        id: "curate",
        title: "Curate Fast",
        body: "Handpicked hotels, flights, and visa guidance matched to your constraints."
    },
    {
        id: "quote",
        title: "Quote Clearly",
        body: "Crystal pricing. No mystery fees. You approve, we lock inventory."
    },
    {
        id: "invoice",
        title: "Invoice Simply",
        body: "You get an invoice ref. Pay by reference; we reconcile instantly."
    },
    {
        id: "depart",
        title: "Travel Confident",
        body: "Final confirmations, WhatsApp support, and live changes if needed."
    }
];
/** tiny util to build stable ref arrays */ function makeRefArray(n) {
    const arr = Array(n).fill(null);
    const setAt = (i)=>(el)=>{
            arr[i] = el;
        };
    return [
        arr,
        setAt
    ];
}
function DigitalDockingDivs({ steps = DEFAULT_STEPS, pipCount = 18, glowEnabled = true, sweepEnabled = true, hoverTilt = true, snap = true, heading = "How It Works" }) {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // refs per-step
    const [shellRefs, setShell] = makeRefArray(steps.length);
    const [bandRefs, setBand] = makeRefArray(steps.length);
    const [fillRefs, setFill] = makeRefArray(steps.length);
    const [sweepRefs, setSweep] = makeRefArray(steps.length);
    const [beaconRefs, setBeacon] = makeRefArray(steps.length);
    const [glowRefs, setGlow] = makeRefArray(steps.length);
    const [badgeRefs, setBadge] = makeRefArray(steps.length);
    const [textRefs, setText] = makeRefArray(steps.length);
    // runtime guardrails
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return false;
        //TURBOPACK unreachable
        ;
    }, []);
    const lowPower = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return false;
        //TURBOPACK unreachable
        ;
        const tiny = undefined;
        const highDPR = undefined;
        const bodyFlag = undefined;
    }, []);
    const sweepOn = sweepEnabled && !reduced && !lowPower;
    const glowOn = glowEnabled && !reduced && !lowPower;
    const tiltOn = hoverTilt && !reduced && !lowPower;
    const pipCountEffective = Math.max(8, Math.round(pipCount * (lowPower ? 0.6 : 1)));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!sectionRef.current) return;
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context(()=>{
            // Make all elements visible immediately (static appearance)
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(bandRefs, {
                opacity: 1,
                y: 0
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(fillRefs, {
                width: 0,
                opacity: 0.7
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(beaconRefs, {
                opacity: 1
            });
            // Hide sweep and glow initially
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(sweepRefs, {
                opacity: 0
            });
            if (!glowOn) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(glowRefs, {
                opacity: 0
            });
            // Create a single scroll-based animation for the entire section
            const masterTL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                    onUpdate: (self)=>{
                        const progress = self.progress;
                        // Update each step based on global progress
                        bandRefs.forEach((band, i)=>{
                            if (!band) return;
                            const fill = fillRefs[i];
                            const sweep = sweepRefs[i];
                            const beacon = beaconRefs[i];
                            const glow = glowRefs[i];
                            // Determine if this step should be illuminated
                            const stepStart = i / steps.length;
                            const stepEnd = (i + 1) / steps.length;
                            const stepProgress = Math.max(0, Math.min(1, (progress - stepStart) / (stepEnd - stepStart)));
                            // Animate fill based on step progress
                            if (fill) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(fill, {
                                    width: `${stepProgress * 100}%`,
                                    opacity: stepProgress > 0 ? 0.7 : 0.3
                                });
                            }
                            // Animate beacon position
                            if (beacon) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(beacon, {
                                    left: `${stepProgress * 100}%`,
                                    opacity: stepProgress > 0.1 ? 1 : 0.3,
                                    scale: stepProgress > 0.1 ? 1 : 0.8
                                });
                            }
                            // Animate sweep highlight
                            if (sweep && sweepOn && stepProgress > 0) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(sweep, {
                                    xPercent: stepProgress * 120 - 20,
                                    opacity: stepProgress > 0.1 ? 0.4 : 0
                                });
                            }
                            // Animate glow
                            if (glow && glowOn && stepProgress > 0) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(glow, {
                                    xPercent: stepProgress * 150 - 50,
                                    opacity: stepProgress > 0.1 ? 0.6 : 0
                                });
                            }
                        });
                    }
                }
            });
            // Optional desktop tilt
            if (tiltOn && window.matchMedia("(hover: hover)").matches) {
                bandRefs.forEach((band)=>{
                    if (!band) return;
                    let rect = band.getBoundingClientRect();
                    const ro = new ResizeObserver(()=>{
                        rect = band.getBoundingClientRect();
                    });
                    ro.observe(band);
                    const onEnter = ()=>rect = band.getBoundingClientRect();
                    const onMove = (e)=>{
                        const cx = rect.left + rect.width / 2;
                        const cy = rect.top + rect.height / 2;
                        const dx = (e.clientX - cx) / (rect.width / 2);
                        const dy = (e.clientY - cy) / (rect.height / 2);
                        band.style.setProperty("--rx", `${-(dy * 2)}deg`);
                        band.style.setProperty("--ry", `${dx * 3}deg`);
                    };
                    const onLeave = ()=>{
                        band.style.setProperty("--rx", "0deg");
                        band.style.setProperty("--ry", "0deg");
                    };
                    band.addEventListener("pointerenter", onEnter, {
                        passive: true
                    });
                    band.addEventListener("pointermove", onMove, {
                        passive: true
                    });
                    band.addEventListener("pointerleave", onLeave, {
                        passive: true
                    });
                    // cleanup on unmount
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    band.__cleanupTilt = ()=>{
                        ro.disconnect();
                        band.removeEventListener("pointerenter", onEnter);
                        band.removeEventListener("pointermove", onMove);
                        band.removeEventListener("pointerleave", onLeave);
                    };
                });
            }
            // Section-level snapping to each step (keep if desired)
            if (snap) {
                let stops = [];
                const computeStops = ()=>{
                    const sec = sectionRef.current;
                    const secTop = sec.getBoundingClientRect().top + window.scrollY;
                    const total = Math.max(1, sec.scrollHeight - window.innerHeight);
                    stops = shellRefs.map((li)=>{
                        if (!li) return 0;
                        const top = li.getBoundingClientRect().top + window.scrollY;
                        const p = (top - secTop) / total;
                        return Math.min(1, Math.max(0, p));
                    });
                };
                computeStops();
                const snapST = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                    id: "runway-snap",
                    trigger: sectionRef.current,
                    start: "top top",
                    end: ()=>`+=${Math.max(1, sectionRef.current.scrollHeight - window.innerHeight)}`,
                    snap: {
                        snapTo: (value)=>stops.length ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.snap(stops, value) : value,
                        duration: 0.3,
                        ease: "power1.inOut"
                    },
                    onRefreshInit: computeStops,
                    onRefresh: computeStops
                });
                // cleanup snap
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                sectionRef.current.__cleanupSnap = ()=>snapST.kill();
            }
        }, sectionRef);
        return ()=>{
            // cleanup tilt listeners
            bandRefs.forEach((el)=>{
                if (!el) return;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                el.__cleanupTilt?.();
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            sectionRef.current?.__cleanupSnap?.();
            ctx.revert();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        steps.length,
        sweepOn,
        glowOn,
        tiltOn,
        snap,
        reduced
    ]);
    // simple pip renderer
    const renderPips = (prefix)=>Array.from({
            length: pipCountEffective
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[1.5px] w-2 sm:h-[2px] sm:w-3 rounded-full bg-white/60 opacity-20"
            }, `${prefix}${i}`, false, {
                fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        "aria-labelledby": "howitworks-heading",
        className: "jsx-8fd37f4ec9f67c3e" + " " + "relative isolate overflow-x-hidden bg-zinc-950 text-zinc-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "jsx-8fd37f4ec9f67c3e" + " " + "pointer-events-none absolute inset-0 [background:radial-gradient(1200px_520px_at_18%_-10%,rgba(255,255,255,0.09)_0%,transparent_60%)]"
            }, void 0, false, {
                fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-8fd37f4ec9f67c3e" + " " + "absolute inset-x-0 top-8 sm:top-12 -z-10 h-16 sm:h-24 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-8fd37f4ec9f67c3e" + " " + "glowbar mx-auto h-16 sm:h-24 w-[130%]"
                }, void 0, false, {
                    fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-8fd37f4ec9f67c3e" + " " + "mx-auto max-w-[980px] px-3 sm:px-4 lg:px-5 pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "jsx-8fd37f4ec9f67c3e" + " " + "mb-6 sm:mb-7 lg:mb-9 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "howitworks-heading",
                                className: "jsx-8fd37f4ec9f67c3e" + " " + "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight",
                                children: heading
                            }, void 0, false, {
                                fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-8fd37f4ec9f67c3e" + " " + "mt-2 text-xs sm:text-sm lg:text-base text-zinc-400 max-w-2xl mx-auto",
                                children: "Five phases. The runway lights guide you from left to right."
                            }, void 0, false, {
                                fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "jsx-8fd37f4ec9f67c3e" + " " + "space-y-4 sm:space-y-6 lg:space-y-7",
                        children: steps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                ref: setShell(i),
                                className: "jsx-8fd37f4ec9f67c3e" + " " + "relative min-h-[72px] sm:min-h-[88px] lg:min-h-[96px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: setBand(i),
                                    className: "jsx-8fd37f4ec9f67c3e" + " " + ([
                                        "absolute inset-0 group rounded-xl sm:rounded-2xl lg:rounded-[26px] border border-white/10",
                                        "bg-zinc-900/40 px-3 sm:px-4 lg:px-5 py-3 sm:py-3.5 lg:py-4.5",
                                        "transition-transform duration-200 will-change-transform [contain:layout_paint_style]",
                                        "[transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] [transform-style:preserve-3d]",
                                        lowPower ? "" : "backdrop-blur",
                                        "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.45)]"
                                    ].join(" ") || ""),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "aria-hidden": true,
                                            style: {
                                                backgroundImage: "radial-gradient(circle at 14px 50%, rgba(255,255,255,.18) 2px, transparent 2px)",
                                                backgroundSize: "40px 12px sm:60px 18px",
                                                backgroundPosition: "0 50%"
                                            },
                                            className: "jsx-8fd37f4ec9f67c3e" + " " + "pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-[26px] opacity-[.14]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                                            lineNumber: 312,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-8fd37f4ec9f67c3e" + " " + "absolute inset-x-2 sm:inset-x-3 top-1.5 sm:top-2 hidden md:flex items-center justify-between gap-1",
                                            children: renderPips("t")
                                        }, void 0, false, {
                                            fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                                            lineNumber: 324,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-8fd37f4ec9f67c3e" + " " + "absolute inset-x-2 sm:inset-x-3 bottom-1.5 sm:bottom-2 hidden md:flex items-center justify-between gap-1",
                                            children: renderPips("b")
                                        }, void 0, false, {
                                            fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                                            lineNumber: 327,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: setFill(i),
                                            style: {
                                                background: "linear-gradient(90deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0.00) 100%)"
                                            },
                                            className: "jsx-8fd37f4ec9f67c3e" + " " + "absolute inset-y-0 left-0 w-0 will-change-[transform,opacity,width] [transform:translateZ(0)]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                                            lineNumber: 332,
                                            columnNumber: 17
                                        }, this),
                                        glowOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: setGlow(i),
                                            "aria-hidden": true,
                                            style: {
                                                background: "linear-gradient(90deg, transparent, rgba(185,190,255,0.9), transparent)",
                                                filter: "blur(12px)",
                                                opacity: 0.6
                                            },
                                            className: "jsx-8fd37f4ec9f67c3e" + " " + "pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 will-change-transform [transform:translateZ(0)]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                                            lineNumber: 343,
                                            columnNumber: 19
                                        }, this),
                                        sweepOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: setSweep(i),
                                            style: {
                                                left: "-10%",
                                                background: "radial-gradient(60%_100% at 50% 50%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.10) 45%, rgba(255,255,255,0.0) 70%)",
                                                mixBlendMode: "screen"
                                            },
                                            className: "jsx-8fd37f4ec9f67c3e" + " " + "pointer-events-none absolute top-0 h-full w-16 sm:w-24 lg:w-36 opacity-0 will-change-[transform,opacity] [transform:translateZ(0)]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                                            lineNumber: 358,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: setBeacon(i),
                                            style: {
                                                left: "-6px",
                                                boxShadow: "0 0 10px rgba(255,245,230,.55), 0 0 28px rgba(255,200,150,.25)"
                                            },
                                            className: "jsx-8fd37f4ec9f67c3e" + " " + "absolute top-1/2 h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-3.5 lg:w-3.5 -translate-y-1/2 rounded-full bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                                            lineNumber: 371,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                gridTemplateColumns: "var(--col-spec)"
                                            },
                                            className: "jsx-8fd37f4ec9f67c3e" + " " + "relative grid items-center gap-x-2 sm:gap-x-3 lg:gap-x-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    ref: setBadge(i),
                                                    className: "jsx-8fd37f4ec9f67c3e" + " " + "inline-flex h-6 sm:h-7 lg:h-8 items-center justify-center rounded-lg border border-white/15 bg-white/10 px-1.5 sm:px-2 text-[9px] sm:text-[10px] lg:text-[11px] font-semibold tracking-wide text-white",
                                                    children: [
                                                        "STEP ",
                                                        i + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-8fd37f4ec9f67c3e" + " " + "leading-tight text-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-8fd37f4ec9f67c3e" + " " + "text-sm sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold",
                                                        children: s.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    ref: setText(i),
                                                    className: "jsx-8fd37f4ec9f67c3e" + " " + "text-xs sm:text-[14px] lg:text-[15px] text-zinc-300",
                                                    children: [
                                                        s.body,
                                                        s.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: s.href,
                                                            className: "jsx-8fd37f4ec9f67c3e" + " " + "ml-2 inline-flex items-center text-[11px] sm:text-[13px] text-zinc-200 underline decoration-zinc-500/60 underline-offset-2 hover:text-white",
                                                            children: "Learn more →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 23
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                                            lineNumber: 382,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                                    lineNumber: 300,
                                    columnNumber: 15
                                }, this)
                            }, s.id, false, {
                                fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                                lineNumber: 295,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "8fd37f4ec9f67c3e",
                children: "section[aria-labelledby=howitworks-heading]{--col-spec:60px minmax(120px,180px)1fr}@media (width>=640px){section[aria-labelledby=howitworks-heading]{--col-spec:74px minmax(150px,220px)1fr}}@media (width>=1024px){section[aria-labelledby=howitworks-heading]{--col-spec:86px minmax(170px,240px)1fr}}@media (width>=1280px){section[aria-labelledby=howitworks-heading]{--col-spec:92px minmax(190px,280px)1fr}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/how-it-works/DigitalDockingDivs.tsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/smart-faq/SmartFAQ.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmartFAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const FAQS = [
    {
        id: "quotation-flow",
        question: "How does the booking/quotation flow work?",
        answer: "You submit your trip details; our team calls to refine the plan; we send a formal quotation with an invoice reference.",
        tags: [
            "booking",
            "quotes"
        ],
        synonyms: [
            "how do i book",
            "pricing process",
            "get a quote",
            "quotation process"
        ]
    },
    {
        id: "what-is-trip-builder-lite",
        question: "What is Trip Builder Lite?",
        answer: "A guided, one-question-at-a-time flow inspired by Typeform. It collects your route, dates, travellers, preferences and hands the request to our team.",
        tags: [
            "trip builder"
        ],
        synonyms: [
            "smart trip form",
            "builder",
            "typeform flow"
        ],
        cta: {
            label: "Start Trip Builder",
            href: "#trip-builder"
        }
    },
    {
        id: "pay-invoice",
        question: "How do I pay an invoice?",
        answer: "Use the Have an Invoice section and enter your reference number. You’ll be redirected to our payment gateway.",
        tags: [
            "payments",
            "invoices"
        ],
        synonyms: [
            "pay bill",
            "payment link",
            "settle invoice"
        ],
        cta: {
            label: "Pay invoice",
            href: "#invoice-pay"
        }
    }
];
/* ---------------- helpers ---------------- */ const norm = (s)=>s.toLowerCase().normalize("NFKD");
const tokenize = (s)=>norm(s).replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
function editDistance(a, b) {
    a = norm(a);
    b = norm(b);
    const m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    const dp = Array.from({
        length: m + 1
    }, ()=>new Array(n + 1).fill(0));
    for(let i = 0; i <= m; i++)dp[i][0] = i;
    for(let j = 0; j <= n; j++)dp[0][j] = j;
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
        }
    }
    return dp[m][n];
}
function scoreItem(q, item) {
    if (!q.trim()) return 0.0001;
    const qn = norm(q);
    const qTokens = tokenize(q);
    const title = norm(item.question);
    const ans = norm(item.answer);
    const tags = item.tags.map(norm);
    const syns = (item.synonyms || []).map(norm);
    let score = 0;
    if (title.includes(qn)) score += 18;
    if (ans.includes(qn)) score += 6;
    for (const qt of qTokens){
        if (qt.length < 2) continue;
        if (title.split(/\s+/).includes(qt)) score += 10;
        if (title.includes(qt)) score += 6;
        if (tags.some((t)=>t.includes(qt))) score += 7;
        if (syns.some((s)=>s.includes(qt))) score += 6;
        if (ans.includes(qt)) score += 3;
        const cands = [
            ...title.split(/\s+/),
            ...syns.flatMap((s)=>s.split(/\s+/)),
            ...tags
        ];
        let best = Infinity;
        for (const c of cands)best = Math.min(best, editDistance(qt, c));
        if (best <= 1 && qt.length >= 4) score += 5;
        else if (best === 2 && qt.length >= 5) score += 3;
    }
    score += Math.min(item.answer.length, 200) / 200;
    return score;
}
function clsx(...xs) {
    return xs.filter(Boolean).join(" ");
}
function SmartFAQ() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const allTags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const s = new Set();
        FAQS.forEach((f)=>f.tags.forEach((t)=>s.add(t)));
        return Array.from(s).sort();
    }, []);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedTags, setSelectedTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastToggledId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* Parse URL once */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const sp = undefined;
        const q = undefined;
        const t = undefined;
        const ex = undefined;
        const hash = undefined;
    }, []);
    /* Sync URL AFTER render, without scrolling to top */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const sp = undefined;
    }, [
        query,
        selectedTags,
        expanded,
        router,
        pathname
    ]);
    /* Deep-link hash update after commit, no scroll jump */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const id = undefined;
        const open = undefined;
        const sp = undefined;
        const url = undefined;
    }, [
        expanded,
        pathname
    ]);
    // Mutators — no router calls here
    const toggleTag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((t)=>{
        setSelectedTags((prev)=>prev.includes(t) ? prev.filter((x)=>x !== t) : [
                ...prev,
                t
            ]);
    }, []);
    const removeTag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((t)=>{
        setSelectedTags((prev)=>prev.filter((x)=>x !== t));
    }, []);
    const clearAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setQuery("");
        setSelectedTags([]);
        setExpanded(new Set());
        setActiveIndex(-1);
        searchRef.current?.focus();
    }, []);
    const setAllExpanded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((open, ids)=>{
        setExpanded(new Set(open ? ids : []));
    }, []);
    const toggleExpand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setExpanded((prev)=>{
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            lastToggledId.current = id;
            return next;
        });
    }, []);
    /* Search + ranking */ const ranked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const byTags = selectedTags.length ? FAQS.filter((f)=>selectedTags.every((t)=>f.tags.includes(t))) : FAQS;
        const withScores = byTags.map((f)=>({
                item: f,
                score: scoreItem(query, f)
            }));
        withScores.sort((a, b)=>b.score - a.score || a.item.question.localeCompare(b.item.question));
        const best = withScores[0];
        const second = withScores[1];
        const bestAnswerId = best && ((second ? best.score - second.score > 10 : best.score > 18) || norm(best.item.question) === norm(query)) ? best.item.id : null;
        return {
            bestAnswerId,
            results: withScores.map((x)=>x.item)
        };
    }, [
        query,
        selectedTags
    ]);
    const visibleIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>ranked.results.map((r)=>r.id), [
        ranked.results
    ]);
    /* Keyboard nav */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function onKey(e) {
            const target = e.target;
            const isTyping = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.getAttribute("contenteditable") === "true");
            if (e.key === "/" && !isTyping) {
                e.preventDefault();
                searchRef.current?.focus();
                return;
            }
            if (e.key === "Escape") {
                clearAll();
                return;
            }
            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                e.preventDefault();
                setActiveIndex((prev)=>{
                    const max = ranked.results.length - 1;
                    if (max < 0) return -1;
                    const next = e.key === "ArrowDown" ? Math.min(max, prev + 1) : Math.max(0, prev - 1);
                    const id = ranked.results[next]?.id;
                    document.getElementById(`faq-item-${id}`)?.scrollIntoView({
                        block: "nearest"
                    });
                    return next;
                });
                return;
            }
            if (e.key === "Enter" && activeIndex >= 0) {
                e.preventDefault();
                const id = ranked.results[activeIndex]?.id;
                if (id) toggleExpand(id);
            }
        }
        window.addEventListener("keydown", onKey);
        return ()=>window.removeEventListener("keydown", onKey);
    }, [
        ranked.results,
        activeIndex,
        toggleExpand,
        clearAll
    ]);
    /* JSON-LD */ const jsonLd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const mainEntity = ranked.results.slice(0, 6).map((f)=>({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: f.answer
                }
            }));
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity
        };
    }, [
        ranked.results
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-d03c4d911aa62b35" + " " + "relative w-full bg-transparent text-white/90",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-d03c4d911aa62b35" + " " + "relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "jsx-d03c4d911aa62b35" + " " + "mb-8 sm:mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-d03c4d911aa62b35" + " " + "text-xs tracking-[0.25em] text-white/50 uppercase",
                                children: "Answers, on tap"
                            }, void 0, false, {
                                fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-d03c4d911aa62b35" + " " + "mt-2 text-4xl sm:text-5xl font-semibold tracking-tight text-white",
                                children: "Smart FAQ"
                            }, void 0, false, {
                                fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-d03c4d911aa62b35" + " " + "mt-3 text-sm sm:text-base text-white/70",
                                children: [
                                    "Search, filter, deep link. Press ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                        className: "jsx-d03c4d911aa62b35" + " " + "px-1 py-0.5 rounded bg-white/10 text-white/80",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                        lineNumber: 282,
                                        columnNumber: 46
                                    }, this),
                                    " to focus search."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d03c4d911aa62b35" + " " + "grid grid-cols-1 lg:grid-cols-12 gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                "aria-label": "FAQ filters and tools",
                                className: "jsx-d03c4d911aa62b35" + " " + "lg:col-span-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-d03c4d911aa62b35" + " " + "dockPanel sticky top-[calc(var(--header-h,72px)+16px)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-d03c4d911aa62b35" + " " + "panel accentEdge rounded-2xl overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-d03c4d911aa62b35" + " " + "border-b border-white/10 p-3 sm:p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "faq-search",
                                                            className: "jsx-d03c4d911aa62b35" + " " + "sr-only",
                                                            children: "Search questions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-d03c4d911aa62b35" + " " + "flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    "aria-hidden": true,
                                                                    className: "jsx-d03c4d911aa62b35" + " " + "i-lucide-search h-4 w-4 opacity-60"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                                    lineNumber: 301,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "faq-search",
                                                                    ref: searchRef,
                                                                    value: query,
                                                                    onChange: (e)=>setQuery(e.target.value),
                                                                    placeholder: "Search questions...",
                                                                    className: "jsx-d03c4d911aa62b35" + " " + "w-full bg-transparent outline-none placeholder-white/40 text-sm sm:text-base"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                                    lineNumber: 302,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                    className: "jsx-d03c4d911aa62b35" + " " + "hidden sm:block text-[11px] px-1.5 py-0.5 rounded bg-white/10 text-white/70",
                                                                    children: "/"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                                    lineNumber: 310,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 19
                                                        }, this),
                                                        (selectedTags.length > 0 || query) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-d03c4d911aa62b35" + " " + "mt-3 flex flex-wrap gap-2",
                                                            children: [
                                                                query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-d03c4d911aa62b35" + " " + "inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-xs",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-d03c4d911aa62b35" + " " + "text-white/70",
                                                                            children: "Query:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                                            lineNumber: 318,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-d03c4d911aa62b35" + " " + "text-white",
                                                                            children: query
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                                            lineNumber: 319,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            "aria-label": "Clear search",
                                                                            onClick: ()=>setQuery(""),
                                                                            className: "jsx-d03c4d911aa62b35" + " " + "opacity-70 hover:opacity-100",
                                                                            children: "×"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                                            lineNumber: 320,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                                    lineNumber: 317,
                                                                    columnNumber: 25
                                                                }, this),
                                                                selectedTags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-d03c4d911aa62b35" + " " + "inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-d03c4d911aa62b35" + " " + "text-white",
                                                                                children: t
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                                                lineNumber: 335,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                "aria-label": `Remove ${t}`,
                                                                                onClick: ()=>removeTag(t),
                                                                                className: "jsx-d03c4d911aa62b35" + " " + "opacity-70 hover:opacity-100",
                                                                                children: "×"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                                                lineNumber: 336,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, `sel-${t}`, true, {
                                                                        fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                                        lineNumber: 331,
                                                                        columnNumber: 25
                                                                    }, this)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: clearAll,
                                                                    className: "jsx-d03c4d911aa62b35" + " " + "ml-auto text-xs rounded-md px-2.5 py-1.5 bg-white/10 hover:bg-white/15 border border-white/10",
                                                                    children: "Reset"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                                    lineNumber: 346,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-d03c4d911aa62b35" + " " + "p-3 sm:p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-d03c4d911aa62b35" + " " + "mb-2 text-[11px] uppercase tracking-[0.16em] text-white/50",
                                                            children: "Filter by tags"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-d03c4d911aa62b35" + " " + "flex flex-wrap gap-2",
                                                            children: allTags.map((t)=>{
                                                                const on = selectedTags.includes(t);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>toggleTag(t),
                                                                    "aria-pressed": on,
                                                                    className: "jsx-d03c4d911aa62b35" + " " + (clsx("shrink-0 text-xs sm:text-sm rounded-full px-3 py-1.5 border transition", on ? "bg-white text-black border-white" : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10") || ""),
                                                                    children: t.charAt(0).toUpperCase() + t.slice(1)
                                                                }, t, false, {
                                                                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                                    lineNumber: 364,
                                                                    columnNumber: 25
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-d03c4d911aa62b35" + " " + "mt-4 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setAllExpanded(true, visibleIds),
                                                                    className: "jsx-d03c4d911aa62b35" + " " + "text-xs rounded-md px-2.5 py-1.5 bg-white/10 hover:bg-white/15 border border-white/10",
                                                                    children: "Expand all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                                    lineNumber: 382,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setAllExpanded(false, visibleIds),
                                                                    className: "jsx-d03c4d911aa62b35" + " " + "text-xs rounded-md px-2.5 py-1.5 bg-white/10 hover:bg-white/15 border border-white/10",
                                                                    children: "Collapse all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                                    lineNumber: 389,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                            lineNumber: 381,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-d03c4d911aa62b35" + " " + "mt-4 panel rounded-xl px-4 py-3 text-sm text-white/70",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-d03c4d911aa62b35" + " " + "text-white",
                                                    children: ranked.results.length
                                                }, void 0, false, {
                                                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 17
                                                }, this),
                                                " result",
                                                ranked.results.length === 1 ? "" : "s",
                                                " found"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                            lineNumber: 401,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                className: "jsx-d03c4d911aa62b35" + " " + "lg:col-span-8",
                                children: [
                                    ranked.bestAnswerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BestAnswerHero, {
                                        item: FAQS.find((f)=>f.id === ranked.bestAnswerId),
                                        onToggle: ()=>toggleExpand(ranked.bestAnswerId),
                                        expanded: expanded.has(ranked.bestAnswerId)
                                    }, void 0, false, {
                                        fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                        lineNumber: 412,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-d03c4d911aa62b35" + " " + "space-y-3",
                                        children: [
                                            ranked.results.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQRow, {
                                                    index: i,
                                                    item: f,
                                                    active: i === activeIndex,
                                                    expanded: expanded.has(f.id),
                                                    onToggle: ()=>toggleExpand(f.id)
                                                }, f.id, false, {
                                                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 17
                                                }, this)),
                                            ranked.results.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                                                onReset: clearAll
                                            }, void 0, false, {
                                                fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                lineNumber: 433,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                        lineNumber: 420,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                lineNumber: 409,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                suppressHydrationWarning: true,
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(jsonLd)
                },
                className: "jsx-d03c4d911aa62b35"
            }, void 0, false, {
                fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                lineNumber: 441,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "d03c4d911aa62b35",
                children: '.panel.jsx-d03c4d911aa62b35{backdrop-filter:blur(14px);background:linear-gradient(to bottom right,#ffffff0f,#ffffff08) border-box;border:1px solid #ffffff1a;position:relative;box-shadow:inset 0 1px #ffffff0f,0 8px 30px #00000059}.panel.jsx-d03c4d911aa62b35:after{content:"";border-radius:inherit;pointer-events:none;background-image:linear-gradient(90deg,#ffffff08 1px,#0000 1px),linear-gradient(#ffffff08 1px,#0000 1px);background-size:24px 24px;position:absolute;inset:0;mask:linear-gradient(#000,#000)}.accentEdge.jsx-d03c4d911aa62b35{overflow:hidden}.accentEdge.jsx-d03c4d911aa62b35:before{content:"";opacity:.6;background:linear-gradient(#ffffffb3,#ffffff1f);border-radius:999px;width:4px;position:absolute;inset:0 0 0 auto}@media (prefers-color-scheme:light){.panel.jsx-d03c4d911aa62b35{border-color:#0000001a}.panel.jsx-d03c4d911aa62b35:after{background-image:linear-gradient(90deg,#0000000a 1px,#0000 1px),linear-gradient(#0000000a 1px,#0000 1px)}.accentEdge.jsx-d03c4d911aa62b35:before{opacity:.5}}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
        lineNumber: 276,
        columnNumber: 5
    }, this);
}
/* ---------- subviews ---------- */ function BestAnswerHero({ item, onToggle, expanded }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "mb-4 rounded-2xl overflow-hidden panel",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative p-4 sm:p-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-3 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/15 px-3 py-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-1.5 w-1.5 rounded-full bg-amber-300/80"
                        }, void 0, false, {
                            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                            lineNumber: 517,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs tracking-wide text-amber-100/90 uppercase",
                            children: "Best answer"
                        }, void 0, false, {
                            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                            lineNumber: 518,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                    lineNumber: 516,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg sm:text-xl font-semibold text-white",
                            children: item.question
                        }, void 0, false, {
                            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                            lineNumber: 522,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "text-xs rounded-md px-2.5 py-1.5 bg-amber-200/20 hover:bg-amber-200/30 border border-amber-200/30",
                            onClick: onToggle,
                            "aria-expanded": expanded,
                            children: expanded ? "Hide" : "Show"
                        }, void 0, false, {
                            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                            lineNumber: 523,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                    lineNumber: 521,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: clsx("grid transition-[grid-template-rows,opacity] duration-150 ease-out", expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-80"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm sm:text-[15px] leading-6 text-white/80",
                                children: item.answer
                            }, void 0, false, {
                                fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                lineNumber: 540,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3",
                                children: item.cta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.cta.href,
                                    className: "inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15",
                                    children: item.cta.label
                                }, void 0, false, {
                                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                    lineNumber: 543,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                lineNumber: 541,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                        lineNumber: 539,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                    lineNumber: 533,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
            lineNumber: 514,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
        lineNumber: 513,
        columnNumber: 5
    }, this);
}
function FAQRow({ item, expanded, onToggle, active, index, compact = false, showBadge = true }) {
    const id = `faq-item-${item.id}`;
    const rowBg = index % 2 === 0 ? "bg-white/[0.045]" : "bg-white/[0.065]";
    const onRelatedClick = (rid)=>(e)=>{
            e.preventDefault();
            const el = document.getElementById(`faq-item-${rid}`);
            if (el) el.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        id: id,
        "data-faq-row": true,
        className: clsx("rounded-2xl border border-white/10 panel", rowBg, active && "ring-2 ring-white/30"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "px-3 sm:px-4 py-3",
            children: [
                showBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-2 flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.15em] text-white/50",
                    children: item.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block h-1.5 w-1.5 rounded-full bg-white/40"
                                }, void 0, false, {
                                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                    lineNumber: 599,
                                    columnNumber: 17
                                }, this),
                                t
                            ]
                        }, t, true, {
                            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                            lineNumber: 598,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                    lineNumber: 596,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onToggle,
                    "aria-expanded": expanded,
                    "aria-controls": `${id}-panel`,
                    className: "group w-full flex items-start justify-between gap-3 text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: clsx("text-base sm:text-lg font-semibold text-white", compact && "text-base"),
                            children: item.question
                        }, void 0, false, {
                            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                            lineNumber: 613,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: clsx("mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-transform", expanded ? "rotate-180" : "rotate-0"),
                            "aria-hidden": true,
                            children: "▾"
                        }, void 0, false, {
                            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                            lineNumber: 616,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                    lineNumber: 606,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: `${id}-panel`,
                    className: clsx("grid transition-[grid-template-rows,opacity] duration-150 ease-out", expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-70"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm sm:text-[15px] leading-6 text-white/75",
                                children: item.answer
                            }, void 0, false, {
                                fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                lineNumber: 635,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap items-center gap-3",
                                children: [
                                    item.cta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.cta.href,
                                        className: "inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15",
                                        children: item.cta.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                        lineNumber: 639,
                                        columnNumber: 17
                                    }, this),
                                    item.related && item.related.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-white/50",
                                        children: [
                                            "Related:",
                                            " ",
                                            item.related.map((rid)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `#faq/${rid}`,
                                                    onClick: onRelatedClick(rid),
                                                    className: "underline decoration-white/30 underline-offset-2 hover:text-white/70",
                                                    children: rid.replace(/-/g, " ")
                                                }, rid, false, {
                                                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                    lineNumber: 651,
                                                    columnNumber: 23
                                                }, this)).reduce((acc, curr, i)=>i ? [
                                                    ...acc,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: " · "
                                                    }, `sep-${i}`, false, {
                                                        fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                                        lineNumber: 661,
                                                        columnNumber: 74
                                                    }, this),
                                                    curr
                                                ] : [
                                                    curr
                                                ], [])
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                        lineNumber: 647,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                                lineNumber: 637,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                        lineNumber: 634,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                    lineNumber: 627,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
            lineNumber: 594,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
        lineNumber: 585,
        columnNumber: 5
    }, this);
}
function EmptyState({ onReset }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl panel px-4 py-8 text-center text-white/70",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm",
                children: [
                    "No results. Try ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white",
                        children: "“invoice”"
                    }, void 0, false, {
                        fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                        lineNumber: 678,
                        columnNumber: 25
                    }, this),
                    ", ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white",
                        children: "“visa”"
                    }, void 0, false, {
                        fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                        lineNumber: 678,
                        columnNumber: 72
                    }, this),
                    ", or",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white",
                        children: "“Trip Builder”"
                    }, void 0, false, {
                        fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                        lineNumber: 679,
                        columnNumber: 9
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                lineNumber: 677,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "mt-4 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15",
                onClick: onReset,
                children: "Clear filters"
            }, void 0, false, {
                fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
                lineNumber: 681,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/smart-faq/SmartFAQ.tsx",
        lineNumber: 676,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/trip-builder/guardrails.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/trip-builder/guardrails.ts
__turbopack_context__.s([
    "ACTIVITIES",
    ()=>ACTIVITIES,
    "AIRLINES",
    ()=>AIRLINES,
    "DESTINATIONS",
    ()=>DESTINATIONS,
    "FLIGHT_CLASSES",
    ()=>FLIGHT_CLASSES,
    "HOTEL_PREFERENCES",
    ()=>HOTEL_PREFERENCES,
    "NATIONALITIES",
    ()=>NATIONALITIES,
    "ORIGIN_CITIES",
    ()=>ORIGIN_CITIES,
    "ROOMS",
    ()=>ROOMS,
    "VISA_STATUS",
    ()=>VISA_STATUS,
    "niceFact",
    ()=>niceFact,
    "whereIs",
    ()=>whereIs
]);
const DESTINATIONS = [
    "Dubai, UAE",
    "Singapore, Singapore",
    "Bangkok, Thailand",
    "Bali, Indonesia",
    "Istanbul, Turkey",
    "Maldives, Maldives",
    "Phuket, Thailand",
    "Doha, Qatar"
];
const ORIGIN_CITIES = [
    "Mumbai, India",
    "Delhi, India",
    "Bangalore, India",
    "Chennai, India",
    "Kolkata, India",
    "Hyderabad, India",
    "Pune, India",
    "Ahmedabad, India",
    "New York, USA",
    "London, UK",
    "Dubai, UAE",
    "Singapore, Singapore"
];
const NATIONALITIES = [
    "Indian",
    "NRI",
    "South Asian",
    "American",
    "Other"
];
const AIRLINES = [
    "Any",
    "IndiGo",
    "Air India",
    "Emirates",
    "Qatar Airways",
    "Vistara"
];
const ROOMS = [
    "King Bed",
    "Twin Beds",
    "Connecting Rooms",
    "High Floor",
    "Non-Smoking",
    "Accessible",
    "Sea View"
];
const ACTIVITIES = [
    "Desert Safari",
    "Burj Al Arab Tour",
    "City Tour",
    "Museum",
    "Theme Park"
];
const HOTEL_PREFERENCES = [
    "3 Star",
    "4 Star",
    "5 Star"
];
const FLIGHT_CLASSES = [
    "Economy",
    "Business",
    "First"
];
const VISA_STATUS = [
    "Available",
    "N/A"
];
// Tiny fact blurbs used for small talk.
// Keep these brand-safe and non-claimy.
const FACTS = {
    "Dubai, UAE": "Desert meets skyscrapers; family-friendly and easy to plan.",
    "Singapore, Singapore": "Compact, spotless, wildly efficient. Food courts are elite.",
    "Bangkok, Thailand": "Temples by day, markets by night. Great value.",
    "Bali, Indonesia": "Beach + rice terraces. Photogenic to a rude degree.",
    "Istanbul, Turkey": "Two continents, one city. History stacked on history.",
    "Maldives, Maldives": "Clear lagoons, overwater villas, escape energy.",
    "Phuket, Thailand": "Tropical paradise with stunning beaches and vibrant nightlife.",
    "Doha, Qatar": "Modern architecture meets traditional culture in the heart of the Middle East."
};
function niceFact(dest) {
    return dest && FACTS[dest] ? FACTS[dest] : "Solid choice. Easy planning.";
}
function whereIs(dest) {
    return dest ? `${dest} is a popular, well-connected destination with plenty of family-friendly options.` : "A well-connected destination with straightforward planning.";
}
}),
"[project]/components/trip/TripBuilderLite.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/trip/TripBuilderLite.tsx
__turbopack_context__.s([
    "default",
    ()=>TripBuilderLite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
// Pull the same curated choices you use in TripBuilderReceipt
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$trip$2d$builder$2f$guardrails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/trip-builder/guardrails.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
/* Keep flow identical to TripBuilderReceipt */ const STEPS = [
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
    "summary"
];
/* ---------------- Helpers ---------------- */ function fmtDate(iso) {
    if (!iso) return "";
    try {
        const d = new Date(iso + "T00:00:00");
        return d.toLocaleDateString(undefined, {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
    } catch  {
        return iso;
    }
}
// map labels like "Dubai, UAE" or "Dubai" back to canonical label
const DESTINATION_LABEL_TO_ID = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$trip$2d$builder$2f$guardrails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DESTINATIONS"].reduce((acc, dest)=>{
    acc[dest.toLowerCase()] = dest;
    const city = dest.split(",")[0].toLowerCase();
    acc[city] = dest;
    return acc;
}, {});
function destinationSlugFromLabel(label) {
    if (!label) return undefined;
    const key = label.toLowerCase().trim();
    if (DESTINATION_LABEL_TO_ID[key]) return DESTINATION_LABEL_TO_ID[key];
    const parts = label.split(",").map((p)=>p.trim());
    if (parts.length >= 2) {
        const recomposedKey = `${parts[0].toLowerCase()}, ${parts[1].toLowerCase()}`;
        return DESTINATION_LABEL_TO_ID[recomposedKey];
    }
    return undefined;
}
/* Quick date presets for true one-click on desktop too */ function addDays(base, days) {
    const d = new Date(base);
    d.setDate(d.getDate() + days);
    return d;
}
function iso(d) {
    return d.toISOString().slice(0, 10);
}
function nextSaturday(from = new Date()) {
    const d = new Date(from);
    const day = d.getDay(); // 0 Sun .. 6 Sat
    const delta = (6 - day + 7) % 7 || 7;
    return addDays(d, delta);
}
function weekendEscape() {
    const start = nextSaturday();
    const end = addDays(start, 1); // Sat-Sun
    return [
        iso(start),
        iso(end)
    ];
}
function nextNights(n) {
    const start = addDays(new Date(), 7); // one week from today, civilized
    const end = addDays(start, n);
    return [
        iso(start),
        iso(end)
    ];
}
function TripBuilderLite() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [idx, setIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        adults: 1,
        children: 0,
        // seededDestination: "Dubai, UAE",
        seedPromptShown: false
    });
    // Determine current step, but skip destinationSeed if nothing is seeded
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!answers.seededDestination) {
            return STEPS.filter((s)=>s !== "destinationSeed");
        }
        return STEPS;
    }, [
        answers.seededDestination
    ]);
    const current = steps[idx];
    // submission state
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const hasAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return Boolean(answers.from && (answers.destination || answers.seededDestination) && answers.nationality && answers.startDate && answers.endDate && answers.passengerName?.trim() && (answers.phoneCountryCode || "").trim() && (answers.phoneNumber || "").trim() && (answers.email || "").trim() && answers.airlinePref && answers.hotelPref && answers.flightClass && answers.visaStatus);
    }, [
        answers
    ]);
    // keyboard: arrows for nav, Enter to proceed/submit
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onKey = (e)=>{
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
        return ()=>window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        current,
        idx,
        answers,
        hasAll,
        submitting
    ]);
    function canProceed() {
        switch(current){
            case "fromLocation":
                return !!answers.from;
            case "destinationSeed":
                return true; // user will click Keep/Change buttons
            case "destinationSelect":
                return !!answers.destination;
            case "dates":
                return Boolean(answers.startDate && answers.endDate && answers.startDate <= answers.endDate);
            case "travellers":
                return (answers.adults ?? 0) >= 1 && (answers.children ?? 0) >= 0;
            case "passengerName":
                return Boolean(answers.passengerName?.trim());
            case "phoneNumber":
                return Boolean((answers.phoneCountryCode || "").trim().length >= 1 && (answers.phoneNumber || "").replace(/\s+/g, "").length >= 6);
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
        setIdx((i)=>Math.min(i + 1, steps.length - 1));
    }
    function goPrev() {
        setIdx((i)=>Math.max(i - 1, 0));
    }
    // Focus management - focus the question when the section is in view
    const questionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const tripBuilderSection = document.getElementById("trip-builder");
        if (tripBuilderSection) {
            const rect = tripBuilderSection.getBoundingClientRect();
            const isInView = rect.top >= 0 && rect.top < window.innerHeight;
            if (isInView && questionRef.current) {
                questionRef.current.focus({
                    preventScroll: true
                });
            }
        }
    }, [
        current
    ]);
    // Small helpers
    function setAndAdvance(key, value) {
        setAnswers((a)=>({
                ...a,
                [key]: value
            }));
        // one-tap auto-advance for choice steps
        const shouldAutoAdvance = [
            "fromLocation",
            "destinationSelect",
            "nationality",
            "airline",
            "hotel",
            "flightClass",
            "visa"
        ].includes(current);
        if (shouldAutoAdvance) {
            setTimeout(()=>goNext(), 160);
        }
    }
    // "Keep seeded destination?" actions
    function keepSeeded() {
        if (!answers.seededDestination) return;
        setAnswers((a)=>({
                ...a,
                destination: a.seededDestination,
                seededDestination: undefined,
                seedPromptShown: true
            }));
        const to = steps.indexOf("dates");
        if (to >= 0) {
            setTimeout(()=>setIdx(to), 120);
        }
    }
    function changeDestination() {
        setAnswers((a)=>({
                ...a,
                seededDestination: undefined,
                seedPromptShown: true
            }));
        const to = steps.indexOf("destinationSelect");
        if (to >= 0) {
            setTimeout(()=>setIdx(to), 120);
        }
    }
    async function submitRequest() {
        if (!hasAll || submitting === "saving") return;
        setSubmitting("saving");
        const payload = {
            origin: answers.from,
            destination: answers.destination || answers.seededDestination || "",
            nationality: answers.nationality,
            startDate: answers.startDate,
            endDate: answers.endDate,
            adults: answers.adults ?? 1,
            kids: answers.children ?? 0,
            airlinePreference: answers.airlinePref,
            hotelPreference: answers.hotelPref,
            flightClass: answers.flightClass,
            visaStatus: answers.visaStatus,
            passengerName: answers.passengerName,
            email: answers.email,
            phoneCountryCode: answers.phoneCountryCode,
            phoneNumber: answers.phoneNumber
        };
        try {
            const res = await fetch("/api/trip-requests", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const json = await res.json().catch(()=>null);
            const createdId = json && typeof json === "object" ? json.id ?? null : null;
            setSubmitting("saved");
            const params = new URLSearchParams();
            const destId = destinationSlugFromLabel(payload.destination);
            if (destId) params.set("destinationId", destId);
            if (createdId) {
                router.push(`/trip/receipt/${createdId}${params.size ? `?${params}` : ""}`);
            } else {
                router.push(`/trip/receipt${params.size ? `?${params}` : ""}`);
            }
        } catch  {
            setSubmitting("error");
        }
    }
    /* -------------- UI labels -------------- */ const stepTitle = {
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
        summary: "Review and submit"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "trip-builder",
        "aria-labelledby": "tripbuilder-heading",
        className: "jsx-9f754352ee0018a" + " " + "relative isolate w-full bg-zinc-950 text-zinc-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "jsx-9f754352ee0018a" + " " + "pointer-events-none absolute inset-0 [background:radial-gradient(1200px_500px_at_20%_-10%,rgba(255,255,255,0.08)_0%,transparent_60%)]"
            }, void 0, false, {
                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-9f754352ee0018a" + " " + "absolute inset-x-0 top-1/2 -z-10 h-28 overflow-hidden pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-9f754352ee0018a" + " " + "glowbar mx-auto h-28 w-[135%]"
                }, void 0, false, {
                    fileName: "[project]/components/trip/TripBuilderLite.tsx",
                    lineNumber: 405,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                lineNumber: 404,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "jsx-9f754352ee0018a" + " " + "sticky top-0 z-10 border-b border-white/10 bg-zinc-950/80 backdrop-blur",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-9f754352ee0018a" + " " + "mx-auto flex max-w-4xl items-center gap-4 px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "tripbuilder-heading",
                                className: "jsx-9f754352ee0018a" + " " + "text-lg font-semibold text-white sm:text-xl",
                                children: "Trip Builder Lite"
                            }, void 0, false, {
                                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-9f754352ee0018a" + " " + "ml-auto flex items-center gap-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-9f754352ee0018a" + " " + "text-xs text-zinc-400",
                                    children: [
                                        "Step ",
                                        idx + 1,
                                        " of ",
                                        steps.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                    lineNumber: 415,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                lineNumber: 414,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/trip/TripBuilderLite.tsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                        total: steps.length,
                        index: idx
                    }, void 0, false, {
                        fileName: "[project]/components/trip/TripBuilderLite.tsx",
                        lineNumber: 420,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                lineNumber: 409,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-9f754352ee0018a" + " " + "mx-auto max-w-4xl px-4 pb-24 pt-4 sm:pt-6 md:pb-28",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-9f754352ee0018a" + " " + "relative rounded-2xl border border-white/12 bg-zinc-950/60 p-0.5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-9f754352ee0018a" + " " + "relative rounded-2xl bg-zinc-950/70",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": true,
                                className: "jsx-9f754352ee0018a" + " " + "pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 [box-shadow:0_0_0_1px_rgba(255,255,255,0.05),0_0_40px_2px_rgba(180,180,255,0.08)_inset]"
                            }, void 0, false, {
                                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                lineNumber: 427,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-9f754352ee0018a" + " " + "px-4 py-5 sm:px-6 sm:py-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9f754352ee0018a" + " " + "mx-auto grid w-full max-w-2xl gap-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-9f754352ee0018a" + " " + "card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                                    className: "jsx-9f754352ee0018a" + " " + "mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-9f754352ee0018a" + " " + "text-2xl font-semibold text-white sm:text-3xl",
                                                            children: stepTitle[current]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                            lineNumber: 437,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-9f754352ee0018a" + " " + "mt-1 text-sm text-zinc-400",
                                                            children: [
                                                                current === "fromLocation" && "Major cities with airports",
                                                                current === "destinationSeed" && "You can change it if needed",
                                                                current === "destinationSelect" && "We’ll refine specifics after you submit",
                                                                current === "dates" && "Select your dates or pick a preset",
                                                                current === "travellers" && "Pick a preset or edit counts",
                                                                current === "passengerName" && "Full legal name as on passport",
                                                                current === "phoneNumber" && "Include your country code",
                                                                current === "email" && "We send your draft itinerary there",
                                                                current === "nationality" && "Used for visa rules",
                                                                current === "airline" && "Optional, helps us shortlist",
                                                                current === "hotel" && "Preferred star level or brand type",
                                                                current === "flightClass" && "We’ll price across cabins",
                                                                current === "visa" && "Tell us where you stand right now",
                                                                current === "summary" && "Double-check before submitting"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                            lineNumber: 440,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-9f754352ee0018a" + " " + "grid w-full gap-5",
                                                    children: [
                                                        current === "fromLocation" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGridBig, {
                                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$trip$2d$builder$2f$guardrails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ORIGIN_CITIES"],
                                                            value: answers.from,
                                                            onChange: (v)=>setAndAdvance("from", v)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                            lineNumber: 461,
                                                            columnNumber: 23
                                                        }, this),
                                                        current === "destinationSeed" && answers.seededDestination && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-9f754352ee0018a" + " " + "grid grid-cols-1 gap-3 sm:grid-cols-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BigButton, {
                                                                    onClick: keepSeeded,
                                                                    variant: "primary",
                                                                    ariaLabel: "Keep destination",
                                                                    children: [
                                                                        "Keep ",
                                                                        answers.seededDestination
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                    lineNumber: 470,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BigButton, {
                                                                    onClick: changeDestination,
                                                                    variant: "ghost",
                                                                    ariaLabel: "Change destination",
                                                                    children: "Change destination"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                    lineNumber: 473,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 23
                                                        }, this),
                                                        current === "destinationSelect" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGridBig, {
                                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$trip$2d$builder$2f$guardrails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DESTINATIONS"],
                                                            value: answers.destination,
                                                            onChange: (v)=>setAndAdvance("destination", v)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                            lineNumber: 480,
                                                            columnNumber: 23
                                                        }, this),
                                                        current === "dates" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-9f754352ee0018a" + " " + "grid gap-5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-9f754352ee0018a" + " " + "grid grid-cols-1 gap-2 sm:grid-cols-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PresetBox, {
                                                                            label: "Weekend escape",
                                                                            hint: "Sat → Sun",
                                                                            onClick: ()=>{
                                                                                const [s, e] = weekendEscape();
                                                                                setAnswers((a)=>({
                                                                                        ...a,
                                                                                        startDate: s,
                                                                                        endDate: e
                                                                                    }));
                                                                                setTimeout(()=>goNext(), 140);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 491,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PresetBox, {
                                                                            label: "Next 5 nights",
                                                                            hint: "1 week from today",
                                                                            onClick: ()=>{
                                                                                const [s, e] = nextNights(5);
                                                                                setAnswers((a)=>({
                                                                                        ...a,
                                                                                        startDate: s,
                                                                                        endDate: e
                                                                                    }));
                                                                                setTimeout(()=>goNext(), 140);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 500,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PresetBox, {
                                                                            label: "Next 7 nights",
                                                                            hint: "1 week from today",
                                                                            onClick: ()=>{
                                                                                const [s, e] = nextNights(7);
                                                                                setAnswers((a)=>({
                                                                                        ...a,
                                                                                        startDate: s,
                                                                                        endDate: e
                                                                                    }));
                                                                                setTimeout(()=>goNext(), 140);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 509,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                    lineNumber: 490,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-9f754352ee0018a" + " " + "grid grid-cols-1 gap-4 sm:grid-cols-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Labeled, {
                                                                            field: "start-date",
                                                                            label: "Start date",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                id: "start-date",
                                                                                type: "date",
                                                                                value: answers.startDate ?? "",
                                                                                max: answers.endDate || undefined,
                                                                                onChange: (e)=>{
                                                                                    const newStartDate = e.target.value;
                                                                                    setAnswers((a)=>({
                                                                                            ...a,
                                                                                            startDate: newStartDate
                                                                                        }));
                                                                                    const endDate = answers.endDate;
                                                                                    if (newStartDate && endDate && newStartDate <= endDate) {
                                                                                        setTimeout(()=>goNext(), 200);
                                                                                    }
                                                                                },
                                                                                className: "jsx-9f754352ee0018a" + " " + "input input-lg"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                                lineNumber: 523,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 522,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Labeled, {
                                                                            field: "end-date",
                                                                            label: "End date",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                id: "end-date",
                                                                                type: "date",
                                                                                value: answers.endDate ?? "",
                                                                                min: answers.startDate || undefined,
                                                                                onChange: (e)=>{
                                                                                    const newEndDate = e.target.value;
                                                                                    setAnswers((a)=>({
                                                                                            ...a,
                                                                                            endDate: newEndDate
                                                                                        }));
                                                                                    const startDate = answers.startDate;
                                                                                    if (startDate && newEndDate && startDate <= newEndDate) {
                                                                                        setTimeout(()=>goNext(), 200);
                                                                                    }
                                                                                },
                                                                                className: "jsx-9f754352ee0018a" + " " + "input input-lg"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                                lineNumber: 540,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 539,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                    lineNumber: 521,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 23
                                                        }, this),
                                                        current === "travellers" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-9f754352ee0018a" + " " + "grid gap-5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-9f754352ee0018a" + " " + "grid grid-cols-1 gap-2 sm:grid-cols-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PresetBox, {
                                                                            label: "Solo",
                                                                            hint: "1 adult",
                                                                            onClick: ()=>{
                                                                                setAnswers((a)=>({
                                                                                        ...a,
                                                                                        adults: 1,
                                                                                        children: 0
                                                                                    }));
                                                                                setTimeout(()=>goNext(), 140);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 564,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PresetBox, {
                                                                            label: "Couple",
                                                                            hint: "2 adults",
                                                                            onClick: ()=>{
                                                                                setAnswers((a)=>({
                                                                                        ...a,
                                                                                        adults: 2,
                                                                                        children: 0
                                                                                    }));
                                                                                setTimeout(()=>goNext(), 140);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 572,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PresetBox, {
                                                                            label: "Family",
                                                                            hint: "2 adults, 2 kids",
                                                                            onClick: ()=>{
                                                                                setAnswers((a)=>({
                                                                                        ...a,
                                                                                        adults: 2,
                                                                                        children: 2
                                                                                    }));
                                                                                setTimeout(()=>goNext(), 140);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 580,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                    lineNumber: 563,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-9f754352ee0018a" + " " + "grid grid-cols-1 gap-4 sm:grid-cols-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Labeled, {
                                                                            field: "adults",
                                                                            label: "Adults",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberField, {
                                                                                id: "adults",
                                                                                min: 1,
                                                                                value: answers.adults ?? 1,
                                                                                onChange: (n)=>{
                                                                                    setAnswers((a)=>({
                                                                                            ...a,
                                                                                            adults: n
                                                                                        }));
                                                                                    if (n >= 1 && (answers.children ?? 0) >= 0) {
                                                                                        setTimeout(()=>goNext(), 220);
                                                                                    }
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                                lineNumber: 593,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 592,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Labeled, {
                                                                            field: "children",
                                                                            label: "Children",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberField, {
                                                                                id: "children",
                                                                                min: 0,
                                                                                value: answers.children ?? 0,
                                                                                onChange: (n)=>{
                                                                                    setAnswers((a)=>({
                                                                                            ...a,
                                                                                            children: n
                                                                                        }));
                                                                                    if ((answers.adults ?? 1) >= 1 && n >= 0) {
                                                                                        setTimeout(()=>goNext(), 220);
                                                                                    }
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                                lineNumber: 606,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 605,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                    lineNumber: 591,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                            lineNumber: 561,
                                                            columnNumber: 23
                                                        }, this),
                                                        current === "passengerName" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Labeled, {
                                                            field: "pname",
                                                            label: "Full name",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "pname",
                                                                type: "text",
                                                                inputMode: "text",
                                                                placeholder: "Type your name",
                                                                value: answers.passengerName ?? "",
                                                                onChange: (e)=>{
                                                                    const newName = e.target.value;
                                                                    setAnswers((a)=>({
                                                                            ...a,
                                                                            passengerName: newName
                                                                        }));
                                                                    if (newName.trim().length >= 2) {
                                                                        setTimeout(()=>goNext(), 300);
                                                                    }
                                                                },
                                                                className: "jsx-9f754352ee0018a" + " " + "input input-lg"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                lineNumber: 624,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                            lineNumber: 623,
                                                            columnNumber: 23
                                                        }, this),
                                                        current === "phoneNumber" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-9f754352ee0018a" + " " + "grid grid-cols-[120px_1fr] gap-3 sm:grid-cols-[140px_1fr]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Labeled, {
                                                                    field: "pcode",
                                                                    label: "Country code",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "pcode",
                                                                        type: "tel",
                                                                        inputMode: "tel",
                                                                        placeholder: "+91",
                                                                        value: answers.phoneCountryCode ?? "",
                                                                        onChange: (e)=>{
                                                                            const newCode = e.target.value;
                                                                            setAnswers((a)=>({
                                                                                    ...a,
                                                                                    phoneCountryCode: newCode
                                                                                }));
                                                                            const phoneNumber = answers.phoneNumber ?? "";
                                                                            if (newCode.trim().length >= 1 && phoneNumber.replace(/\s+/g, "").length >= 6) {
                                                                                setTimeout(()=>goNext(), 260);
                                                                            }
                                                                        },
                                                                        className: "jsx-9f754352ee0018a" + " " + "input input-lg"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                        lineNumber: 645,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                    lineNumber: 644,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Labeled, {
                                                                    field: "pnum",
                                                                    label: "Number",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "pnum",
                                                                        type: "tel",
                                                                        inputMode: "tel",
                                                                        placeholder: "98765 43210",
                                                                        value: answers.phoneNumber ?? "",
                                                                        onChange: (e)=>{
                                                                            const newNumber = e.target.value;
                                                                            setAnswers((a)=>({
                                                                                    ...a,
                                                                                    phoneNumber: newNumber
                                                                                }));
                                                                            const countryCode = answers.phoneCountryCode ?? "";
                                                                            if (countryCode.trim().length >= 1 && newNumber.replace(/\s+/g, "").length >= 6) {
                                                                                setTimeout(()=>goNext(), 260);
                                                                            }
                                                                        },
                                                                        className: "jsx-9f754352ee0018a" + " " + "input input-lg"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                        lineNumber: 663,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                    lineNumber: 662,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                            lineNumber: 643,
                                                            columnNumber: 23
                                                        }, this),
                                                        current === "email" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Labeled, {
                                                            field: "email",
                                                            label: "Email",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "email",
                                                                type: "email",
                                                                inputMode: "email",
                                                                placeholder: "you@example.com",
                                                                value: answers.email ?? "",
                                                                onChange: (e)=>{
                                                                    const newEmail = e.target.value;
                                                                    setAnswers((a)=>({
                                                                            ...a,
                                                                            email: newEmail
                                                                        }));
                                                                    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
                                                                        setTimeout(()=>goNext(), 260);
                                                                    }
                                                                },
                                                                className: "jsx-9f754352ee0018a" + " " + "input input-lg"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                lineNumber: 685,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                            lineNumber: 684,
                                                            columnNumber: 23
                                                        }, this),
                                                        current === "nationality" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGridBig, {
                                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$trip$2d$builder$2f$guardrails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NATIONALITIES"],
                                                            value: answers.nationality,
                                                            onChange: (v)=>setAndAdvance("nationality", v)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                            lineNumber: 704,
                                                            columnNumber: 23
                                                        }, this),
                                                        current === "airline" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGridBig, {
                                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$trip$2d$builder$2f$guardrails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AIRLINES"],
                                                            value: answers.airlinePref,
                                                            onChange: (v)=>setAndAdvance("airlinePref", v)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                            lineNumber: 712,
                                                            columnNumber: 23
                                                        }, this),
                                                        current === "hotel" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGridBig, {
                                                            options: [
                                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$trip$2d$builder$2f$guardrails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOTEL_PREFERENCES"],
                                                                "7 Star"
                                                            ],
                                                            value: answers.hotelPref,
                                                            onChange: (v)=>setAndAdvance("hotelPref", v)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                            lineNumber: 720,
                                                            columnNumber: 23
                                                        }, this),
                                                        current === "flightClass" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGridBig, {
                                                            options: [
                                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$trip$2d$builder$2f$guardrails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FLIGHT_CLASSES"],
                                                                "Premium Economy"
                                                            ],
                                                            value: answers.flightClass,
                                                            onChange: (v)=>setAndAdvance("flightClass", v)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                            lineNumber: 728,
                                                            columnNumber: 23
                                                        }, this),
                                                        current === "visa" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGridBig, {
                                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$trip$2d$builder$2f$guardrails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_STATUS"],
                                                            value: answers.visaStatus,
                                                            onChange: (v)=>setAndAdvance("visaStatus", v)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                            lineNumber: 736,
                                                            columnNumber: 23
                                                        }, this),
                                                        current === "summary" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-9f754352ee0018a" + " " + "rounded-xl border border-white/12 bg-white/5 p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                                                    className: "jsx-9f754352ee0018a" + " " + "grid grid-cols-1 gap-3 sm:grid-cols-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                                                            term: "From",
                                                                            def: answers.from
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 746,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                                                            term: "To",
                                                                            def: answers.destination || answers.seededDestination
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 747,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                                                            term: "Start",
                                                                            def: fmtDate(answers.startDate)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 748,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                                                            term: "End",
                                                                            def: fmtDate(answers.endDate)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 749,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                                                            term: "Adults",
                                                                            def: String(answers.adults ?? 0)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 750,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                                                            term: "Children",
                                                                            def: String(answers.children ?? 0)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 751,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                                                            term: "Name",
                                                                            def: answers.passengerName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 752,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                                                            term: "Phone",
                                                                            def: `${answers.phoneCountryCode ?? ""} ${answers.phoneNumber ?? ""}`.trim()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 753,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                                                            term: "Email",
                                                                            def: answers.email
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 757,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                                                            term: "Nationality",
                                                                            def: answers.nationality
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 758,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                                                            term: "Airline",
                                                                            def: answers.airlinePref
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 759,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                                                            term: "Hotel",
                                                                            def: answers.hotelPref
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 760,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                                                            term: "Class",
                                                                            def: answers.flightClass
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 761,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                                                            term: "Visa",
                                                                            def: answers.visaStatus
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                            lineNumber: 762,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                    lineNumber: 745,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-9f754352ee0018a" + " " + "mt-3 text-sm text-zinc-400",
                                                                    children: [
                                                                        submitting === "saving" && "Submitting…",
                                                                        submitting === "saved" && "Redirecting…",
                                                                        submitting === "error" && "We couldn’t submit your request. Refresh and try again."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                                    lineNumber: 764,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                            lineNumber: 744,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                            lineNumber: 435,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                        lineNumber: 434,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9f754352ee0018a" + " " + "sticky bottom-0 z-10 mt-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-9f754352ee0018a" + " " + "flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-zinc-950/85 px-4 py-3 backdrop-blur sm:px-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: goPrev,
                                                    disabled: idx === 0 || submitting === "saving",
                                                    className: "jsx-9f754352ee0018a" + " " + "btn-ghost disabled:opacity-40",
                                                    children: "← Back"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                    lineNumber: 779,
                                                    columnNumber: 19
                                                }, this),
                                                current === "summary" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: submitRequest,
                                                    disabled: !hasAll || submitting === "saving",
                                                    className: "jsx-9f754352ee0018a" + " " + "btn-primary w-40 disabled:opacity-40",
                                                    children: submitting === "saving" ? "Submitting…" : "Submit →"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                    lineNumber: 789,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: goNext,
                                                    disabled: !canProceed() || submitting === "saving",
                                                    className: "jsx-9f754352ee0018a" + " " + "btn-primary w-32 disabled:opacity-40",
                                                    children: "Next →"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                                    lineNumber: 798,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                            lineNumber: 778,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                        lineNumber: 777,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                                lineNumber: 433,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/trip/TripBuilderLite.tsx",
                        lineNumber: 426,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/trip/TripBuilderLite.tsx",
                    lineNumber: 425,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                lineNumber: 424,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "9f754352ee0018a",
                children: ".card.jsx-9f754352ee0018a{background:#ffffff0a;border:1px solid #ffffff1a;border-radius:1rem;padding:1rem;box-shadow:0 12px 40px #00000059}.input.jsx-9f754352ee0018a{color:#fff;backdrop-filter:blur(6px);background:#ffffff0f;border:1px solid #ffffff1f;border-radius:.9rem;outline:none;width:100%;padding:.65rem .9rem;transition:border-color .16s,box-shadow .16s,transform .12s}.input.jsx-9f754352ee0018a:focus{border-color:#ffffff47;box-shadow:0 0 0 4px #b4b4ff1f}.input-lg.jsx-9f754352ee0018a{padding:.9rem 1rem;font-size:1rem}.btn-primary.jsx-9f754352ee0018a,.btn-ghost.jsx-9f754352ee0018a{color:#fff;backdrop-filter:blur(6px);touch-action:manipulation;border:1px solid #ffffff24;border-radius:.9rem;padding:.7rem 1rem;transition:transform 80ms,background .16s,border-color .16s}.btn-primary.jsx-9f754352ee0018a{background:linear-gradient(#ffffff2e,#ffffff0f)}.btn-ghost.jsx-9f754352ee0018a{background:#ffffff0f}.btn-primary.jsx-9f754352ee0018a:active,.btn-ghost.jsx-9f754352ee0018a:active{transform:scale(.98)}.choice.jsx-9f754352ee0018a{color:#fff;text-align:left;touch-action:manipulation;background:#ffffff0f;border:1px solid #ffffff1f;border-radius:1rem;justify-content:space-between;align-items:center;gap:.75rem;padding:1rem;line-height:1.2;transition:transform 80ms,background .16s,border-color .16s,box-shadow .16s;display:flex}.choice.jsx-9f754352ee0018a:hover{background:#ffffff1a}.choice.jsx-9f754352ee0018a:active{transform:scale(.98)}.choice[data-active=true].jsx-9f754352ee0018a{background:#ffffff1f;border-color:#ffffff47;box-shadow:inset 0 4px 24px #8c8cff1f}.pill.jsx-9f754352ee0018a{background:#ffffff59;border-radius:9999px;width:.9rem;height:.9rem;display:inline-flex}.pill[data-active=true].jsx-9f754352ee0018a{background:#fff}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/trip/TripBuilderLite.tsx",
        lineNumber: 394,
        columnNumber: 5
    }, this);
}
/* ---------------- Little building blocks ---------------- */ function Labeled({ field, label, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        htmlFor: field,
        className: "block rounded-xl border border-white/10 bg-white/5 p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 text-xs uppercase tracking-wide text-zinc-400",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                lineNumber: 911,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/trip/TripBuilderLite.tsx",
        lineNumber: 910,
        columnNumber: 5
    }, this);
}
function BigButton({ children, onClick, variant = "primary", ariaLabel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-label": ariaLabel,
        onClick: onClick,
        className: variant === "primary" ? "btn-primary w-full" : "btn-ghost w-full",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/trip/TripBuilderLite.tsx",
        lineNumber: 929,
        columnNumber: 5
    }, this);
}
function ChoiceGridBig({ options, value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
        children: options.map((opt)=>{
            const active = value === opt;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-pressed": active,
                onClick: ()=>onChange(opt),
                className: "choice",
                "data-active": active ? "true" : "false",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-base",
                        children: opt
                    }, void 0, false, {
                        fileName: "[project]/components/trip/TripBuilderLite.tsx",
                        lineNumber: 962,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pill",
                        "data-active": active ? "true" : "false"
                    }, void 0, false, {
                        fileName: "[project]/components/trip/TripBuilderLite.tsx",
                        lineNumber: 963,
                        columnNumber: 13
                    }, this)
                ]
            }, opt, true, {
                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                lineNumber: 954,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/trip/TripBuilderLite.tsx",
        lineNumber: 950,
        columnNumber: 5
    }, this);
}
function PresetBox({ label, hint, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: "choice",
        "aria-label": label,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-base text-white",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/trip/TripBuilderLite.tsx",
                        lineNumber: 988,
                        columnNumber: 9
                    }, this),
                    hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-zinc-400 mt-0.5",
                        children: hint
                    }, void 0, false, {
                        fileName: "[project]/components/trip/TripBuilderLite.tsx",
                        lineNumber: 989,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                lineNumber: 987,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pill",
                "data-active": "true"
            }, void 0, false, {
                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                lineNumber: 991,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/trip/TripBuilderLite.tsx",
        lineNumber: 981,
        columnNumber: 5
    }, this);
}
function NumberField({ id, min = 0, value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "btn-ghost px-3 py-2",
                onClick: ()=>onChange(Math.max(min, (value || 0) - 1)),
                "aria-label": "Decrease",
                children: "−"
            }, void 0, false, {
                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                lineNumber: 1009,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: id,
                type: "number",
                min: min,
                value: value,
                onChange: (e)=>onChange(Number(e.target.value || 0)),
                className: "input input-lg text-center"
            }, void 0, false, {
                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                lineNumber: 1017,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "btn-ghost px-3 py-2",
                onClick: ()=>onChange((value || 0) + 1),
                "aria-label": "Increase",
                children: "+"
            }, void 0, false, {
                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                lineNumber: 1025,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/trip/TripBuilderLite.tsx",
        lineNumber: 1008,
        columnNumber: 5
    }, this);
}
function Row({ term, def }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border border-white/10 bg-white/5 p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                className: "text-xs uppercase tracking-wide text-zinc-400",
                children: term
            }, void 0, false, {
                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                lineNumber: 1040,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                className: "mt-1 text-sm text-white",
                children: def || "—"
            }, void 0, false, {
                fileName: "[project]/components/trip/TripBuilderLite.tsx",
                lineNumber: 1041,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/trip/TripBuilderLite.tsx",
        lineNumber: 1039,
        columnNumber: 5
    }, this);
}
function ProgressBar({ total, index }) {
    const pct = Math.max(2, Math.min(100, Math.round((index + 1) / total * 100)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-1.5 w-full bg-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full bg-white transition-[width] duration-300 ease-out",
            style: {
                width: `${pct}%`
            },
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/components/trip/TripBuilderLite.tsx",
            lineNumber: 1050,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/trip/TripBuilderLite.tsx",
        lineNumber: 1049,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b51e765e._.js.map