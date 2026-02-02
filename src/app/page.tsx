'use client'

export default function HomePage() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#9E4A46]">
      {/* SVG mask that reveals ONLY the word CAVAZOS */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Mask: white = show, black = hide */}
          <mask id="cavazosMask">
            <rect width="1200" height="400" fill="black" />
            <text
              x="600"
              y="210"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontFamily="ui-serif, Georgia, Times, serif"
              fontWeight="600"
              fontSize="220"
              letterSpacing="35"
            >
              CAVAZOS
            </text>
          </mask>
        </defs>

        {/* Put video on the page, but only show it through the mask */}
        <foreignObject
          x="0"
          y="0"
          width="1200"
          height="400"
          mask="url(#cavazosMask)"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/1.mp4" type="video/mp4" />
          </video>
        </foreignObject>
      </svg>
    </main>
  )
}
