import logoImg from "../../../mylogo.png";
import faviconImg from "../../imports/Group_3.svg";
import { Outlet, Link, useLocation } from "react-router";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export function Root() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    document.title = "BySoban";
  }, []);

  const navHref = (section: string) =>
    isHome ? `#${section}` : `/#${section}`;

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "#080808", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <Helmet>
        <title>BySoban</title>
        <link rel="icon" type="image/svg+xml" href={faviconImg} />
      </Helmet>
      {/* Sticky nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b border-white/5"
        style={{
          backgroundColor: "rgba(8,8,8,0.85)",
          backdropFilter: "blur(16px)",
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none" }}
        >
          <img
            src={logoImg}
            alt="BySoban"
            style={{ height: "32px", width: "auto", display: "block" }}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Work", "Services", "About", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href={navHref(item.toLowerCase())}
              style={{
                color: "#888888",
                fontSize: "0.85rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#888888";
              }}
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href={navHref("contact")}
          className="px-5 py-2 rounded-full transition-all duration-200 hover:opacity-90"
          style={{
            backgroundColor: "#C8F04E",
            color: "#080808",
            fontSize: "0.82rem",
            fontWeight: 700,
          }}
        >
          Let's Talk
        </a>
      </nav>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
