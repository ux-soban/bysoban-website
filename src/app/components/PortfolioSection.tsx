import { useState } from "react";
import chiropracticImg from "../../chiropractic.jpg";
import xlyAppImg from "../../xly.jpg";
import shoplifyImg from "../../shoplify.jpg";
import ecoHeeraImg from "../../ecohera.jpg";
import realEstateImg from "../../realestate.jpg";
import investImg from "../../invest.jpg";;

const projects = [
  {
    id: 1,
    title: "SpineSync — Chiropractic Website",
    category: "Website Design",
    description: "Multi-page website design for a modern chiropractic clinic — service pages, therapist profiles, booking flows, and a wellness blog.",
    image: chiropracticImg,
    year: "2024",
    link: "https://www.behance.net/sobansaeed",
  },
  {
    id: 2,
    title: "XLY — Crypto Betting App",
    category: "Mobile App Design",
    description: "End-to-end mobile app design for a crypto-powered sports betting platform — login flows, wallet dashboard, and bet tracking.",
    image: xlyAppImg,
    year: "2024",
    link: "https://www.behance.net/sobansaeed",
  },
  {
    id: 3,
    title: "Shoplify — E-Commerce App",
    category: "Mobile App Design",
    description: "Full-featured mobile shopping app — product discovery, cart flows, checkout experience, and personalized recommendations.",
    image: shoplifyImg,
    year: "2023",
    link: "https://www.behance.net/sobansaeed",
  },
  {
    id: 4,
    title: "Eco Heera — Lab Grown Diamonds",
    category: "Website Design",
    description: "E-commerce website for a sustainable lab-grown diamond brand — product catalogue, custom ring builder, and an editorial brand story.",
    image: ecoHeeraImg,
    year: "2023",
    link: "https://www.behance.net/sobansaeed",
  },
  {
    id: 5,
    title: "1Invest — Stocks Trading App",
    category: "Mobile App Design",
    description: "A sleek mobile trading app for stocks and crypto — portfolio dashboard, real-time market data, wishlist, and buy/sell flows.",
    image: investImg,
    year: "2024",
    link: "https://www.behance.net/sobansaeed",
  },
  {
    id: 6,
    title: "Logopsum — Real Estate Website",
    category: "Website Design",
    description: "A full-featured real estate platform — property listings, advanced filters, individual property pages, and expert contact flows.",
    image: realEstateImg,
    year: "2024",
    link: "https://www.behance.net/sobansaeed",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer"
      style={{
        border: "1px solid",
        borderColor: hovered ? "rgba(200,240,78,0.25)" : "rgba(255,255,255,0.06)",
        transition: "border-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.5)" : "none",
        backgroundColor: "#0e0e0e",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative" style={{ height: "240px", overflow: "hidden" }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            transition: "opacity 0.4s ease, transform 0.6s ease",
            opacity: hovered ? 0.85 : 1,
            transform: hovered ? "scale(1.06)" : "scale(1)",
            display: "block",
          }}
        />
      </div>

      {/* Gradient overlay — extends 8px past image bottom to seal the subpixel gap */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          left: 0,
          right: 0,
          height: "252px",
          zIndex: 2,
          background: "linear-gradient(to top, rgba(14,14,14,1) 0%, rgba(14,14,14,1) 5%, rgba(14,14,14,0.25) 55%, transparent 100%)",
        }}
      />

      {/* View button on hover */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          top: 0,
          left: 0,
          right: 0,
          height: "240px",
          zIndex: 3,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full"
          style={{
            backgroundColor: "#C8F04E",
            color: "#080808",
            fontSize: "0.8rem",
            fontWeight: 700,
            textDecoration: "none",
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            transition: "transform 0.3s ease 0.05s",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          View on Behance
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="#080808" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span
            className="px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: "rgba(200,240,78,0.08)",
              border: "1px solid rgba(200,240,78,0.2)",
              color: "#C8F04E",
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {project.category}
          </span>
          <span style={{ color: "#444444", fontSize: "0.75rem", fontWeight: 500 }}>
            {project.year}
          </span>
        </div>

        <h3
          style={{
            color: "#ffffff",
            fontSize: "1rem",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
            marginBottom: "8px",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            color: "#666666",
            fontSize: "0.78rem",
            lineHeight: 1.6,
          }}
        >
          {project.description}
        </p>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section
      id="work"
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#0e0e0e" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(200,240,78,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(200,240,78,0.025) 0%, transparent 40%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header row */}
        <div className="flex items-start justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
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
                Portfolio
              </span>
            </div>
            <h2
              style={{
                color: "#ffffff",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
              }}
            >
              Selected work
            </h2>
          </div>
        </div>

        {/* Card grid */}
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
