const items = [
  "UI Design",
  "UX Research",
  "Wireframing",
  "SaaS Dashboards",
  "Web Apps",
  "Website Design",
  "Landing Pages",
  "Mobile Apps",
  "Figma Prototypes",
  "User Testing",
];

function DiamondStar() {
  return (
    <span
      className="flex-shrink-0 mx-6"
      style={{ color: "#C8F04E", fontSize: "1rem" }}
      aria-hidden="true"
    >
      ✦
    </span>
  );
}

export function MarqueeStrip() {
  // Duplicate items for seamless loop
  const allItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden py-6"
      style={{ backgroundColor: "#0e0e0e" }}
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
      />
      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
      />

      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #0e0e0e, transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, #0e0e0e, transparent)",
        }}
      />

      {/* Scrolling track */}
      <div className="animate-marquee flex items-center whitespace-nowrap will-change-transform">
        {allItems.map((item, i) => (
          <span key={i} className="inline-flex items-center flex-shrink-0">
            <span
              style={{
                color: "#888888",
                fontSize: "0.85rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {item}
            </span>
            <DiamondStar />
          </span>
        ))}
      </div>
    </div>
  );
}