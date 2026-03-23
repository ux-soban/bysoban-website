import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Mobile App Design",
    description:
      "Native iOS and Android designs with intuitive flows, polished interactions, and a focus on user delight.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8F04E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" fill="#C8F04E" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Website Design",
    description:
      "Visually compelling, conversion-focused websites crafted to communicate your brand and turn visitors into customers.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8F04E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Web App & SaaS Design",
    description:
      "End-to-end product design for complex web applications and SaaS platforms — from architecture to pixel-perfect interfaces, including dashboards.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8F04E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Wireframing",
    description:
      "Structured low and mid-fidelity wireframes that map user journeys, validate assumptions, and align teams before a single line of code is written.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8F04E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 8h18M8 3v18" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Prototyping",
    description:
      "Interactive Figma prototypes that bring designs to life — enabling realistic user testing and confident stakeholder sign-offs.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8F04E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "User Testing",
    description:
      "Structured usability testing sessions that surface real friction points and validate design decisions before launch.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8F04E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M9 10.5l1.5 1.5 3-3" />
      </svg>
    ),
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="service-card relative flex flex-col p-7 rounded-xl cursor-default transition-all duration-300"
      style={{
        backgroundColor: hovered ? "#111111" : "#0d0d0d",
        border: "1px solid",
        borderColor: hovered ? "rgba(200,240,78,0.15)" : "rgba(255,255,255,0.07)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top row: icon + number */}
      <div className="flex items-start justify-between mb-5">
        {/* Icon box */}
        <div
          className="flex items-center justify-center w-10 h-10 rounded-lg"
          style={{
            backgroundColor: "rgba(200,240,78,0.1)",
            border: "1px solid rgba(200,240,78,0.2)",
          }}
        >
          {service.icon}
        </div>
        {/* Card number */}
        <span
          style={{
            color: "#333333",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
          }}
        >
          {service.number}
        </span>
      </div>

      {/* Title */}
      <h3
        className="mb-3"
        style={{
          color: "#ffffff",
          fontSize: "1.05rem",
          fontWeight: 700,
          lineHeight: 1.3,
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        style={{
          color: "#666666",
          fontSize: "0.875rem",
          lineHeight: 1.75,
          flex: 1,
        }}
      >
        {service.description}
      </p>

      {/* Animated green underline */}
      <div className="mt-6 h-px overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
        <div
          className="card-underline h-full"
          style={{ backgroundColor: "#C8F04E" }}
        />
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-5">
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
            What I Do
          </span>
        </div>

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <h2
            style={{
              color: "#ffffff",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: "24rem",
            }}
          >
            Services built for{" "}
            <span style={{ color: "#C8F04E" }}>real results.</span>
          </h2>
          <p
            style={{
              color: "#666666",
              fontSize: "0.9rem",
              lineHeight: 1.75,
              maxWidth: "22rem",
            }}
          >
            Every service is rooted in research, refined through iteration, and
            delivered with precision — no fluff, just impact.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
