import { useState } from "react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$149",
    featured: false,
    features: [
      "1 design deliverable",
      "Up to 5 screens",
      "Responsive design",
      "Unlimited revisions",
      "Figma source file",
      "5-day delivery",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$349",
    badge: "Most Popular",
    featured: true,
    features: [
      "Up to 15 screens",
      "Full UI design",
      "Responsive design",
      "Unlimited revisions",
      "Figma source file",
      "Design system",
      "10-day delivery",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$799",
    featured: false,
    features: [
      "Up to 30 screens",
      "Full UI design",
      "Responsive design",
      "Unlimited revisions",
      "Figma source file",
      "Design system",
      "User testing session",
      "Priority delivery",
      "1 month support",
    ],
  },
];

function CheckIcon({ dark }: { dark: boolean }) {
  return (
    <span
      className="flex items-center justify-center flex-shrink-0 rounded-full w-[18px] h-[18px]"
      style={{
        backgroundColor: dark ? "rgba(200,240,78,0.12)" : "rgba(0,0,0,0.12)",
      }}
    >
      <svg
        width="10"
        height="8"
        viewBox="0 0 10 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 4L3.5 6.5L9 1"
          stroke={dark ? "#C8F04E" : "#080808"}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function PricingSection({ onSelectPackage }: { onSelectPackage: (pkg: string) => void }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="pricing"
      className="py-28 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#080808" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Glow behind middle card */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200,240,78,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top label */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-8" style={{ backgroundColor: "#C8F04E" }} />
          <span
            style={{
              color: "#C8F04E",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Packages
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-center mb-4"
          style={{
            color: "#ffffff",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
          }}
        >
          Simple, clear pricing
        </h2>

        {/* Subtitle */}
        <p
          className="text-center mx-auto mb-16"
          style={{
            color: "#666666",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            maxWidth: "460px",
          }}
        >
          No surprise fees, no bloated retainers. Pick a plan that fits your
          project and get premium UI/UX design delivered fast.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => {
            const isHovered = hovered === plan.id;
            const isFeatured = plan.featured;

            return (
              <div
                key={plan.id}
                className="relative rounded-2xl flex flex-col transition-all duration-300 cursor-default"
                style={{
                  backgroundColor: isFeatured ? "#C8F04E" : "#0e0e0e",
                  border: isFeatured
                    ? "none"
                    : isHovered
                    ? "1px solid rgba(200,240,78,0.3)"
                    : "1px solid rgba(255,255,255,0.08)",
                  padding: isFeatured ? "32px" : "32px",
                  transform:
                    isFeatured
                      ? "scale(1.04)"
                      : isHovered
                      ? "translateY(-4px)"
                      : "none",
                  boxShadow: isFeatured
                    ? "0 24px 64px rgba(200,240,78,0.18)"
                    : isHovered
                    ? "0 16px 40px rgba(0,0,0,0.4)"
                    : "none",
                  zIndex: isFeatured ? 2 : 1,
                }}
                onMouseEnter={() => setHovered(plan.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Most Popular badge */}
                {plan.badge && (
                  <div className="mb-5">
                    <span
                      className="inline-block px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "#080808",
                        color: "#C8F04E",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <span
                  style={{
                    color: isFeatured ? "rgba(0,0,0,0.55)" : "#555555",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  {plan.name}
                </span>

                {/* Price */}
                <div className="mt-3 mb-1 flex items-end gap-1">
                  <span
                    style={{
                      color: isFeatured ? "#080808" : "#ffffff",
                      fontSize: "clamp(2.4rem, 4vw, 3rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {plan.price}
                  </span>
                </div>

                <span
                  style={{
                    color: isFeatured ? "rgba(0,0,0,0.5)" : "#444444",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  per project / one-time
                </span>

                {/* Divider */}
                <div
                  className="my-6"
                  style={{
                    height: "1px",
                    backgroundColor: isFeatured
                      ? "rgba(0,0,0,0.15)"
                      : "rgba(255,255,255,0.07)",
                  }}
                />

                {/* Features */}
                <ul className="flex flex-col gap-3.5 flex-1">
                  {plan.features
                    .filter(
                      (f) =>
                        f !== "1 month support" &&
                        f !== "User testing session" &&
                        f !== "Priority delivery"
                    )
                    .map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckIcon dark={!isFeatured} />
                        <span
                          style={{
                            color: isFeatured ? "#080808" : "#aaaaaa",
                            fontSize: "0.83rem",
                            fontWeight: 500,
                            lineHeight: 1.4,
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <button
                  className="mt-8 w-full py-3.5 rounded-xl transition-all duration-200"
                  style={{
                    backgroundColor: isFeatured ? "#080808" : "#C8F04E",
                    color: isFeatured ? "#C8F04E" : "#080808",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    border: "none",
                    cursor: "pointer",
                    opacity: isHovered || isFeatured ? 1 : 0.92,
                    transform:
                      isHovered && !isFeatured ? "scale(1.01)" : "scale(1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = "0.88";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                  }}
                  onClick={() => {
                    onSelectPackage(`${plan.name} — ${plan.price}`);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}