"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type MediaItem =
  | { type: "video"; src: string }
  | { type: "image"; src: string; alt?: string };

export default function Page() {
  // Put your own files in /public (e.g. /public/hero1.mp4, /public/hero2.jpg)
  const media: MediaItem[] = useMemo(
    () => [
      { type: "video", src: "/hero1.mp4" },
      { type: "image", src: "/hero2.jpg", alt: "Hero image 2" },
      { type: "video", src: "/hero3.mp4" },
    ],
    []
  );

  // Rotate media
  const [idx, setIdx] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    if (media.length <= 1) return;

    const interval = setInterval(() => {
      // fade out, swap, fade in
      setFadeIn(false);
      setTimeout(() => {
        setIdx((v) => (v + 1) % media.length);
        setFadeIn(true);
      }, 350);
    }, 6000);

    return () => clearInterval(interval);
  }, [media.length]);

  // Menu (top-right)
  const [menuOpen, setMenuOpen] = useState(false);

  // Unique mask id (avoids collisions if component re-renders)
  const maskId = "cavazos-mask";

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-blue-700">
      {/* TOP RIGHT MENU */}
      <div className="absolute right-0 top-0 z-30 p-4 sm:p-6">
        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
          >
            Menu <span aria-hidden>☰</span>
          </button>

          {menuOpen && (
            <div
              role="menu"
              className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/10"
            >
              <Link
                href="/about"
                role="menuitem"
                className="block px-4 py-3 text-sm hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/work"
                role="menuitem"
                className="block px-4 py-3 text-sm hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/contact"
                role="menuitem"
                className="block px-4 py-3 text-sm hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* MEDIA LAYER (this is what will show through the letters) */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          {media[idx]?.type === "video" ? (
            <video
              key={media[idx].src}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={media[idx].src} />
            </video>
          ) : (
            <Image
              key={media[idx].src}
              src={media[idx].src}
              alt={media[idx].alt ?? "Background"}
              fill
              priority
              className="object-cover"
            />
          )}
        </div>
      </div>

      {/* BLUE OVERLAY PUNCHED OUT BY TEXT (SVG MASK) */}
      <svg
        className="absolute inset-0 z-10 h-full w-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          {/* Mask: white = show blue overlay, black = punch hole (show video behind) */}
          <mask id={maskId}>
            <rect x="0" y="0" width="1000" height="1000" fill="white" />

            {/* Taller letters: scaleY increases letter height */}
            <g transform="translate(500 520) scale(1 1.35)">
              <text
                x="0"
                y="0"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
                fontWeight="800"
                fontSize="140"
                letterSpacing="35"
                fill="black"
              >
                CAVAZOS
              </text>
            </g>
          </mask>
        </defs>

        {/* This is your full-screen blue “sheet” */}
        <rect
          x="0"
          y="0"
          width="1000"
          height="1000"
          fill="rgb(29, 78, 216)" /* blue-700-ish */
          mask={`url(#${maskId})`}
        />
      </svg>

      {/* TEXT OUTLINE ON TOP (so letters read clearly) */}
      <div className="pointer-events-none absolute inset-0 z-20 grid place-items-center">
        <div className="relative">
          <h1
            className="
              select-none text-center font-extrabold uppercase
              tracking-[0.35em] text-transparent
            "
            style={{
              // Taller letters (extra boost on top of SVG scale if you want)
              transform: "scaleY(1.12)",
              WebkitTextStroke: "2px rgba(255,255,255,0.95)",
            }}
          >
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
              CAVAZOS
            </span>
          </h1>
        </div>
      </div>
    </main>
  );
}
