export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24"
      style={{ backgroundColor: "#080808" }}
    >
      {/* Grid background */}
      <div className="hero-grid-bg absolute inset-0 pointer-events-none" />

      {/* Radial glow at center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,240,78,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

        {/* Badge */}
        <div
          className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
          style={{
            backgroundColor: "rgba(200,240,78,0.06)",
            borderColor: "#C8F04E",
            animationDelay: "0ms",
          }}
        >
          {/* Pulsing dot */}
          <span className="relative flex h-2 w-2">
            <span
              className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full"
              style={{ backgroundColor: "#4ade80" }}
            />
            <span
              className="animate-pulse-core relative inline-flex rounded-full h-2 w-2"
              style={{ backgroundColor: "#C8F04E" }}
            />
          </span>
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "#C8F04E" }}
          >
            Available for new projects
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up mb-6 leading-[1.1] tracking-tight"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            fontWeight: 800,
            animationDelay: "100ms",
            opacity: 0,
          }}
        >
          <span style={{ color: "#ffffff" }}>Design that </span>
          <span style={{ color: "#555555" }}>converts,</span>
          <br />
          <span style={{ color: "#C8F04E" }}>not just looks </span>
          <span style={{ color: "#555555" }}>good.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-up mb-10 max-w-xl mx-auto"
          style={{
            color: "#888888",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            animationDelay: "200ms",
            opacity: 0,
          }}
        >
          I design digital products that drive real outcomes — from SaaS
          dashboards to mobile apps. Clean, purposeful, and built around your
          users.
        </p>

        {/* Buttons */}
        <div
          className="animate-fade-up flex flex-wrap items-center justify-center gap-4 mb-16"
          style={{ animationDelay: "300ms", opacity: 0 }}
        >
          <a
            href="#work"
            className="px-7 py-3.5 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              backgroundColor: "#C8F04E",
              color: "#080808",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "0.01em",
            }}
          >
            View My Work
          </a>
          <a
            href="#pricing"
            className="px-7 py-3.5 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              border: "1.5px solid rgba(255,255,255,0.2)",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "0.95rem",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "#C8F04E";
              (e.currentTarget as HTMLAnchorElement).style.color = "#C8F04E";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(255,255,255,0.2)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
            }}
          >
            See Packages
          </a>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-up w-full flex flex-col sm:flex-row items-center justify-center gap-px"
          style={{ animationDelay: "400ms", opacity: 0 }}
        >
          {[
            { number: "3", suffix: "+", label: "Years Experience" },
            { number: "150", suffix: "+", label: "Projects Delivered" },
            { number: "100", suffix: "%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center px-10 py-6 sm:border-r last:border-r-0 border-b sm:border-b-0"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="flex items-baseline gap-0.5 mb-1"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}
              >
                <span className="stat-number">{stat.number}</span>
                <span style={{ color: "#C8F04E", fontWeight: 800 }}>
                  {stat.suffix}
                </span>
              </div>
              <span
                style={{
                  color: "#666666",
                  fontSize: "0.8rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(8,8,8,0.8))",
        }}
      />
    </section>
  );
}