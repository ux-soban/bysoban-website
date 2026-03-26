import { ImageWithFallback } from "./figma/ImageWithFallback";
import sobanPhoto from "../../soban.jpg";

const tools = [
  "Figma",
  "Prototyping",
  "User Research",
  "Wireframing",
  "Usability Testing",
  "Design Systems",
];

export function AboutSection() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "#0e0e0e" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — Portrait */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Photo frame */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  aspectRatio: "3 / 4",
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <ImageWithFallback
                  src={sobanPhoto}
                  alt="Soban — UI/UX Designer"
                  className="w-full h-full"
                  style={{ filter: "grayscale(20%)", objectFit: "cover", objectPosition: "center", scale: "1.05" }}
                />
                {/* Subtle overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 50%, rgba(14,14,14,0.5) 100%)",
                  }}
                />
              </div>

              {/* Green badge — bottom right overlap */}
              <div
                className="absolute -bottom-4 -right-4 lg:-right-6 px-4 py-2.5 rounded-xl flex items-center gap-2 z-10 shadow-xl"
                style={{
                  backgroundColor: "#C8F04E",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#080808" }}
                />
                <span
                  style={{
                    color: "#080808",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.01em",
                    whiteSpace: "nowrap",
                  }}
                >Expert Product Designer</span>
              </div>

              {/* Decorative corner accent */}
              <div
                className="absolute -top-3 -left-3 w-12 h-12 rounded-tl-xl"
                style={{
                  border: "2px solid rgba(200,240,78,0.3)",
                  borderRight: "none",
                  borderBottom: "none",
                }}
              />
            </div>
          </div>

          {/* Right — Content */}
          <div className="flex flex-col justify-center mt-8 lg:mt-0">
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
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2
              className="mb-8"
              style={{
                color: "#ffffff",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                lineHeight: 1.15,
              }}
            >
              Design is problem solving,{" "}
              <span style={{ color: "#555555" }}>not art.</span>
            </h2>

            {/* Paragraphs */}
            <div className="flex flex-col gap-5 mb-10">
              <p style={{ color: "#777777", fontSize: "0.9rem", lineHeight: 1.8 }}>
                I'm Soban — a UI/UX designer with 5+ years of experience crafting
                digital products that sit at the intersection of aesthetics and
                function. I don't design to impress; I design to solve.
              </p>
              <p style={{ color: "#777777", fontSize: "0.9rem", lineHeight: 1.8 }}>
                From SaaS platforms to mobile apps and conversion-focused landing
                pages, every pixel I push is backed by research, tested against
                real users, and iterated until it performs. My process is
                collaborative, transparent, and grounded in business goals.
              </p>
              <p style={{ color: "#777777", fontSize: "0.9rem", lineHeight: 1.8 }}>
                Based in Pakistan, I work with startups, agencies, and founders
                globally to deliver experiences that users love and businesses
                rely on. If you're building something that matters, let's talk.
              </p>
            </div>

            {/* Tool tags */}
            <div className="flex flex-wrap gap-2.5">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: "#141414",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#aaaaaa",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
