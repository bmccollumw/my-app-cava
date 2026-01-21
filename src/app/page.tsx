"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";

export default function Page() {
  const videos = useMemo(() => ["/city/1.mp4", "/city/2.mp4", "/city/3.mp4"], []);

  // Menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // Video crossfade state (always cityscapes, always moving)
  const [active, setActive] = useState(0);
  const [fadeToB, setFadeToB] = useState(false);

  // Close menu on outside click / ESC
  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    function onMouseDown(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  // Rotate cityscape videos forever (optional). If you want ONE video only,
  // set videos to ["/city/1.mp4"] and this effect will do nothing.
  useEffect(() => {
    if (videos.length <= 1) return;

    const interval = setInterval(() => {
      // start fade
      setFadeToB(true);

      // after fade, switch active and fade back
      const t = setTimeout(() => {
        setActive((prev) => (prev + 1) % videos.length);
        setFadeToB(false);
      }, 800);

      return () => clearTimeout(t);
    }, 9000);

    return () => clearInterval(interval);
  }, [videos.length]);

  const srcA = videos[active];
  const srcB = videos.length > 1 ? videos[(active + 1) % videos.length] : videos[active];

  return (
    <main className="min-h-screen w-full bg-[#1f4fe0] overflow-hidden">
      {/* Top-right menu */}
      <div className="fixed top-4 right-4 z-50" ref={menuRef}>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-white backdrop-blur hover:bg-white/15 transition"
          aria-haspopup="menu"
          aria-expanded={menuOpen}
        >
          <span className="text-sm font-semibold">Menu</span>
          <span className="text-lg leading-none">≡</span>
        </button>

        {menuOpen && (
          <div
            role="menu"
            className="mt-2 w-48 overflow-hidden rounded-2xl border border-white/20 bg-[#0b1b4a]/70 text-white shadow-xl backdrop-blur"
          >
            <MenuItem label="Home" href="/" />
            <MenuItem label="About" href="/about" />
            <MenuItem label="Work" href="/work" />
            <MenuItem label="Contact" href="/contact" />
          </div>
        )}
      </div>

      {/* Centered title */}
      <div className="min-h-screen w-full grid place-items-center px-3">
        <HeroMaskedVideoText text="CAVAZOS" srcA={srcA} srcB={srcB} fadeToB={fadeToB} />
      </div>
    </main>
  );
}

function MenuItem({ label, href }: { label: string; href: string }) {
  return (
    <a
      role="menuitem"
      href={href}
      className="block px-4 py-3 text-sm hover:bg-white/10 transition"
    >
      {label}
    </a>
  );
}

function HeroMaskedVideoText({
  text,
  srcA,
  srcB,
  fadeToB,
}: {
  text: string;
  srcA: string;
  srcB: string;
  fadeToB: boolean;
}) {
  // SSR-safe stable id (fixes hydration error)
  const maskId = useId();

  return (
    <div className="w-[96vw] max-w-[1700px]">
      <svg viewBox="0 0 1600 520" className="w-full h-auto select-none" aria-label={text}>
        <defs>
          <mask id={maskId}>
            <rect width="1600" height="520" fill="black" />
            <text
              x="50%"
              y="62%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              style={{
                fontFamily:
                  'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial',
                fontWeight: 900,
                fontSize: 290, // taller letters
                letterSpacing: 26,
              }}
            >
              {text}
            </text>
          </mask>
        </defs>

        {/* Videos clipped to text */}
        <foreignObject x="0" y="0" width="1600" height="520" mask={`url(#${maskId})`}>
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <video
              src={srcA}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Crossfade layer */}
            <video
              src={srcB}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                fadeToB ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Optional: makes the video feel more “rich/opaque” inside the letters */}
            <div className="absolute inset-0 pointer-events-none bg-black/15" />
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
